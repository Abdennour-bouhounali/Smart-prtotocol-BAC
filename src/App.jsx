import React, { useState, useEffect } from 'react';
import BookViewer from './components/BookViewer';
import { loadExercices } from './utils/exerciseLoader';
import './styles/global.css';

const App = () => {
    const [exercices, setExercices] = useState([]);
    const [bookName, setBookName] = useState('بروتوكول SMART لحل المسائل الرياضية');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            const { sections: s, exercices: e } = await loadExercices();
            // Combine sections and exercises to show the entire book
            setExercices([...s, ...e]);
            setLoading(false);
        };
        fetchContent();
    }, []);

    const handlePrint = () => {
        setTimeout(() => {
            window.print();
        }, 300);
    };

    if (loading) return <div style={{ direction: 'rtl', padding: '20px' }}>جاري التحميل...</div>;

    return (
        <div className="app-container" dir="rtl">
            {/* SCREEN VIEW - What you see in browser */}
            <div className="screen-only" style={{ display: 'flex', width: '100%', height: '100%' }}>
                <BookViewer exercices={exercices} bookName={bookName} />
            </div>

            {/* PRINT VIEW - What gets printed to PDF */}
            <div className="print-only">
                <BookViewer exercices={exercices} bookName={bookName} />
            </div>

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
                    🖨️ تصدير PDF (A4)
                </button>
            </div>
        </div>
    );
};

export default App;
