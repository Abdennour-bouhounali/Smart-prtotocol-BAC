import React, { useRef, useEffect } from 'react';
import { usePagination } from '../hooks/usePagination';

/**
 * PrintAggregator renders ALL sections sequentially in a hidden container
 * that is only used for PDF/print output. It is activated only when printing.
 * This keeps the print output identical to the original single-page book view.
 */
const PrintAggregator = ({ sections, bookName }) => {
    const editorRef = useRef(null);

    // Trigger pagination once all sections are mounted
    usePagination(editorRef, bookName, [sections.map(s => s.id).join(',')], { isPrint: true });

    return (
        <div className="print-only">
            <div
                id="editor"
                ref={editorRef}
                contentEditable="true"
                spellCheck="false"
                suppressContentEditableWarning={true}
            >
                {sections.map((section, index) => {
                    const SectionComponent = section.Component;
                    return (
                        <React.Fragment key={section.id}>
                            {/* Force page break between sections (not before the first) */}
                            {index > 0 && (
                                <div
                                    className="manual-break"
                                    style={{ pageBreakBefore: 'always' }}
                                />
                            )}
                            <SectionComponent />
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default React.memo(PrintAggregator);
