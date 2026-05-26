import React, { useRef, useEffect } from 'react';
import { usePagination } from '../hooks/usePagination';

// Helper to extract and clone nodes from a section's editor
const extractRawNodes = (editor) => {
    const nodes = [];
    const pages = editor.querySelectorAll('.page');
    if (pages.length > 0) {
        pages.forEach(page => {
            const content = page.querySelector('.page-content');
            if (content) {
                Array.from(content.childNodes).forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() === '') return;
                    nodes.push(node.cloneNode(true));
                });
            }
        });
    } else {
        Array.from(editor.childNodes).forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() === '') return;
            nodes.push(node.cloneNode(true));
        });
    }
    return nodes;
};

const PrintBookViewer = ({ sections, bookName, triggerPaginationRef }) => {
    const editorRef = useRef(null);
    const { paginate } = usePagination(editorRef, bookName, []);

    useEffect(() => {
        if (triggerPaginationRef) {
            triggerPaginationRef.current = () => {
                const editor = editorRef.current;
                if (!editor) return;

                // Clear print container
                editor.innerHTML = '';

                // Aggregate all sections
                sections.forEach((section, index) => {
                    const screenEditor = document.getElementById(`editor-${section.id}`);
                    if (screenEditor) {
                        // Insert manual page break between sections
                        if (index > 0) {
                            const breakNode = document.createElement('div');
                            breakNode.className = 'manual-break';
                            breakNode.style.pageBreakBefore = 'always';
                            editor.appendChild(breakNode);
                        }

                        // Extract and append cloned nodes from screen view
                        const nodes = extractRawNodes(screenEditor);
                        nodes.forEach(node => {
                            editor.appendChild(node);
                        });
                    }
                });

                // Run pagination engine on print-only container
                paginate();
            };
        }
    }, [sections, paginate, triggerPaginationRef]);

    return (
        <div className="main-view" style={{ padding: 0 }}>
            <div 
                id="print-editor" 
                ref={editorRef} 
                className="book-editor"
                contentEditable="true" 
                spellCheck="false" 
                suppressContentEditableWarning={true}
            >
                {/* Dynamically populated during PDF generation */}
            </div>
        </div>
    );
};

export default PrintBookViewer;
