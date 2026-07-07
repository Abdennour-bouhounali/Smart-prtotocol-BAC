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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ fontWeight: '700', fontSize: '10pt', color: '#555555' }}>
                    اسم الكتاب:
                </label>
                <input
                    id="book-name-input"
                    type="text"
                    value={bookName}
                    onChange={(e) => onBookNameChange(e.target.value)}
                    style={{
                        padding: '5px 8px',
                        borderRadius: '2px',
                        border: '1px solid #BBBBBB',
                        background: '#FFFFFF',
                        color: '#111111',
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
            >
                🖨️ تصدير PDF
            </button>

            {/* Section list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1, overflowY: 'auto' }}>
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
