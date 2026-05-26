import React, { useRef } from 'react';
import { usePagination } from '../hooks/usePagination';

const SectionViewer = ({ section, bookName, resetCounter }) => {
    const editorRef = useRef(null);

    // Run pagination independently for this section
    usePagination(editorRef, bookName, [section.id, resetCounter]);

    const Component = section.Component;

    return (
        <div 
            id={`editor-${section.id}`} 
            ref={editorRef} 
            className="book-editor"
            contentEditable="true" 
            spellCheck="false" 
            suppressContentEditableWarning={true}
        >
            <Component key={resetCounter} />
        </div>
    );
};

// Use React.memo to prevent re-rendering when other sections update
export default React.memo(SectionViewer, (prevProps, nextProps) => {
    return (
        prevProps.section.id === nextProps.section.id &&
        prevProps.bookName === nextProps.bookName &&
        prevProps.resetCounter === nextProps.resetCounter
    );
});
