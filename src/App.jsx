import React, { useState, useEffect, useRef } from 'react';
import { loadExercices } from './utils/exerciseLoader';
import SectionViewer from './components/SectionViewer';
import PrintBookViewer from './components/PrintBookViewer';
import './styles/global.css';

const App = () => {
    const [exercices, setExercices] = useState([]);
    const [activeSectionId, setActiveSectionId] = useState('');
    const [sectionResets, setSectionResets] = useState({});
    const [bookName, setBookName] = useState('بروتوكول SMART لحل المسائل الرياضية');
    const [loading, setLoading] = useState(true);

    const triggerPaginationRef = useRef(null);

    useEffect(() => {
        const fetchContent = async () => {
            const { sections: s, exercices: e } = await loadExercices();
            const combined = [...s, ...e];
            setExercices(combined);
            if (combined.length > 0) {
                setActiveSectionId(combined[0].id);
            }
            setLoading(false);
        };
        fetchContent();
    }, []);

    const handlePrint = async () => {
        if (triggerPaginationRef.current) {
            // Aggregate and paginate the print view
            triggerPaginationRef.current();

            // Wait for MathJax typesetting if available
            if (window.MathJax && window.MathJax.typesetPromise) {
                try {
                    await window.MathJax.typesetPromise([document.getElementById('print-editor')]);
                } catch (err) {
                    console.error("MathJax typesetting error:", err);
                }
            }

            // Let layout settle
            setTimeout(() => {
                window.print();
            }, 500);
        }
    };

    const handleRefreshActiveSection = () => {
        if (activeSectionId) {
            setSectionResets(prev => ({
                ...prev,
                [activeSectionId]: (prev[activeSectionId] || 0) + 1
            }));
        }
    };

    if (loading) return <div style={{ direction: 'rtl', padding: '20px' }}>جاري التحميل...</div>;

    return (
        <div className="app-container" dir="rtl">
            {/* SCREEN VIEW - What you see in browser */}
            <div className="screen-only" style={{ display: 'flex', width: '100%', height: '100%' }}>
                {/* Sidebar Navigation */}
                <div className="sidebar">
                    <div className="sidebar-title" style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>
                        {bookName}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto', flex: 1 }}>
                        {exercices.map(sec => (
                            <div 
                                key={sec.id}
                                className={`exercise-item ${activeSectionId === sec.id ? 'active' : ''}`}
                                onClick={() => setActiveSectionId(sec.id)}
                            >
                                <span>{sec.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main View rendering only the active section content */}
                <div className="main-view">
                    {exercices.map(sec => (
                        <div 
                            key={sec.id} 
                            style={{ display: activeSectionId === sec.id ? 'block' : 'none' }}
                        >
                            <SectionViewer 
                                section={sec} 
                                bookName={bookName} 
                                resetCounter={sectionResets[sec.id] || 0}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* PRINT VIEW - What gets printed to PDF */}
            <div className="print-only">
                <PrintBookViewer 
                    sections={exercices} 
                    bookName={bookName} 
                    triggerPaginationRef={triggerPaginationRef} 
                />
            </div>

            {/* Controls Bar */}
            <div className="controls-bar" style={{
                position: 'fixed',
                top: '20px',
                left: '20px',
                zIndex: 1000,
                background: 'white',
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}>
                <label style={{ fontWeight: 'bold' }}>اسم الكتاب:</label>
                <input
                    type="text"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <button
                    className="export-btn"
                    onClick={handlePrint}
                    style={{ position: 'relative', top: '0', right: '0', background: '#e67e22' }}
                >
                    🖨️ تصدير PDF (B5)
                </button>
                <button
                    className="btn-book-view"
                    onClick={handleRefreshActiveSection}
                    style={{ background: '#c0392b', display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                    🔄 تحديث القسم الحالي
                </button>
            </div>
        </div>
    );
};

export default App;
