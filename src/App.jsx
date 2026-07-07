import React, { useState, useEffect, useCallback } from 'react';
import SectionViewer from './components/SectionViewer';
import SectionNav from './components/SectionNav';
import PrintAggregator from './components/PrintAggregator';
import { loadExercices } from './utils/exerciseLoader';
import './styles/global.css';

/** Read the section id stored in the URL hash, e.g. "#section-Introduction" → "section-Introduction" */
const getHashSectionId = () => window.location.hash.replace(/^#/, '') || null;

const App = () => {
    const [sections, setSections] = useState([]);
    const [bookName, setBookName] = useState('بروتوكول SMART لحل المسائل الرياضية');
    const [activeSectionId, setActiveSectionId] = useState(getHashSectionId);
    const [loading, setLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isPrinting, setIsPrinting] = useState(false);

    useEffect(() => {
        const fetchContent = async () => {
            const { sections: s, exercices: e } = await loadExercices();
            const allSections = [...s, ...e];
            setSections(allSections);

            // On load, honour the URL hash if it matches a known section;
            // otherwise fall back to the first section.
            const hashId = getHashSectionId();
            const match = allSections.find((sec) => sec.id === hashId);
            const initial = match ? match.id : allSections[0]?.id ?? null;

            setActiveSectionId(initial);
            // Make sure the URL reflects the resolved section
            if (initial && initial !== hashId) {
                window.location.replace(`#${initial}`);
            }

            setLoading(false);
        };
        fetchContent();
    }, []);

    // Keep URL hash in sync when the user navigates between sections
    const handleSectionSelect = useCallback((sectionId) => {
        setActiveSectionId(sectionId);
        // pushState-style navigation via hash so the Back button works
        window.location.hash = sectionId;
    }, []);

    // Support browser Back / Forward buttons
    useEffect(() => {
        const onHashChange = () => {
            const id = getHashSectionId();
            if (id) setActiveSectionId(id);
        };
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    // Scroll Persistence per section
    useEffect(() => {
        if (!activeSectionId) return;

        const scrollKey = `scrollPos_${activeSectionId}`;

        const restoreScroll = () => {
            const savedPos = sessionStorage.getItem(scrollKey);
            if (savedPos) {
                requestAnimationFrame(() => {
                    const mainView = document.querySelector('.main-view');
                    if (mainView) mainView.scrollTop = parseInt(savedPos, 10);
                    window.scrollTo(0, parseInt(savedPos, 10));
                });
            }
        };

        // Restore on mount/reload
        restoreScroll();

        // Save scroll position using capture phase to catch inner scrolls (like .main-view)
        const handleScroll = (e) => {
            const pos = e.target.scrollTop ?? window.scrollY;
            // Prevent saving 0 if the container is temporarily empty due to pagination
            if (pos > 0) {
                sessionStorage.setItem(scrollKey, pos.toString());
            }
        };

        window.addEventListener('scroll', handleScroll, { capture: true, passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll, { capture: true });
        };
    }, [activeSectionId]);

    const handlePrint = useCallback(() => {
        setIsPrinting(true);

        requestAnimationFrame(() => {
            setTimeout(() => {
                window.print();

                setTimeout(() => {
                    setIsPrinting(false);
                }, 1000);

            }, 1000);
        });
    }, []);

    const activeSection = React.useMemo(() => (
        sections.find(s => s.id === activeSectionId)
    ), [sections, activeSectionId]);

    if (loading) {
        return (
            <div style={{ direction: 'rtl', padding: '20px', fontFamily: 'Amiri, serif' }}>
                جاري التحميل...
            </div>
        );
    }



    return (
        <div className="app-container" dir="rtl">
            {/* ── SCREEN VIEW ── */}
            <div className="screen-only" style={{ display: 'flex', width: '100%', height: '100%', position: 'relative' }}>

                {/* Sidebar Toggle Button */}
                <button
                    className={`sidebar-toggle ${sidebarOpen ? 'open' : 'closed'}`}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-label="Toggle Sidebar"
                >
                    {sidebarOpen ? '✕' : '☰'}
                </button>

                {/* Sidebar navigation */}
                <div className={`sidebar-wrapper ${sidebarOpen ? 'open' : 'closed'}`}>
                    <SectionNav
                        sections={sections}
                        activeSectionId={activeSectionId}
                        onSectionSelect={handleSectionSelect}
                        bookName={bookName}
                        onBookNameChange={setBookName}
                        onPrint={handlePrint}
                    />
                </div>

                {/* Render ONLY the active section to improve performance and hot reload behavior */}
                <div className="content-wrapper">
                    {activeSection && (
                        <SectionViewer
                            key={activeSection.id}
                            section={activeSection}
                            bookName={bookName}
                            isVisible={true}
                        />
                    )}
                </div>
            </div>

            {/* ── PRINT VIEW ── All sections aggregated into one document for PDF export */}
            <PrintAggregator sections={sections} bookName={bookName} />
        </div>
    );
};

export default App;
