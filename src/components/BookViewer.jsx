import React, { useRef } from 'react';
import { usePagination } from '../hooks/usePagination';

const BookViewer = ({ exercices, bookName }) => {
    const editorRef = useRef(null);

    // Trigger pagination when the list of exercices changes
    usePagination(editorRef, bookName, [exercices.map(e => e.id).join(',')]);

    return (
        <div className="main-view">
            <div id="editor" ref={editorRef} contentEditable="true" spellCheck="false" suppressContentEditableWarning={true}>
                {exercices.map((ex, index) => {
                    const ExerciseComponent = ex.Component;
                    return (
                        <React.Fragment key={ex.id}>
                            {/* Force a manual break between exercises, but not for the first one */}
                            {index > 0 && <div className="manual-break" style={{ pageBreakBefore: 'always' }}></div>}
                            <ExerciseComponent />
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default BookViewer;
