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

    const handlePrint = () => {
        setIsPrinting(true);

        requestAnimationFrame(() => {
            setTimeout(() => {
                window.print();

                setTimeout(() => {
                    setIsPrinting(false);
                }, 1000);

            }, 1000);
        });
    };

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
            <div className="screen-only" style={{ display: 'flex', width: '100%', height: '100%' }}>
                {/* Sidebar navigation */}
                <SectionNav
                    sections={sections}
                    activeSectionId={activeSectionId}
                    onSectionSelect={handleSectionSelect}
                    bookName={bookName}
                    onBookNameChange={setBookName}
                    onPrint={handlePrint}
                />

                {/* Section viewers — all mounted, only active one is visible.
                    This preserves per-section state (edits, pagination) across navigation. */}
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                    {sections.map((section) => (
                        <SectionViewer
                            key={section.id}
                            section={section}
                            bookName={bookName}
                            isVisible={section.id === activeSectionId}
                        />
                    ))}
                </div>
            </div>

            {/* ── PRINT VIEW ── All sections aggregated into one document for PDF export */}
            <PrintAggregator sections={sections} bookName={bookName} />
        </div>
    );
};

export default App;
