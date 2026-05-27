import React from 'react';

/**
 * SectionNav renders the sidebar navigation for switching between sections.
 * Selecting a section sets it as active; other sections remain mounted but hidden,
 * preserving their internal state (edits, pagination, etc.).
 */
const SectionNav = ({ sections, activeSectionId, onSectionSelect, bookName, onBookNameChange, onPrint }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-title">📚 فصول الكتاب</div>

            {/* Book name editor */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontWeight: 'bold', fontSize: '10pt', opacity: 0.8 }}>
                    اسم الكتاب:
                </label>
                <input
                    id="book-name-input"
                    type="text"
                    value={bookName}
                    onChange={(e) => onBookNameChange(e.target.value)}
                    style={{
                        padding: '6px 8px',
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.3)',
                        background: 'rgba(255,255,255,0.1)',
                        color: 'white',
                        fontSize: '10pt',
                        direction: 'rtl',
                        width: '100%',
                    }}
                />
            </div>

            {/* PDF export button */}
            <button
                id="print-pdf-btn"
                className="btn-book-view"
                onClick={onPrint}
                style={{ background: '#e67e22', marginBottom: '8px' }}
            >
                🖨️ تصدير PDF
            </button>

            {/* Section list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1, overflowY: 'auto' }}>
                {sections.map((section) => (
                    <div
                        key={section.id}
                        id={`nav-${section.id}`}
                        className={`exercise-item ${activeSectionId === section.id ? 'active' : ''}`}
                        onClick={() => onSectionSelect(section.id)}
                        title={section.name}
                    >
                        <span style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            flex: 1,
                            fontSize: '10.5pt',
                        }}>
                            {section.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default React.memo(SectionNav);
