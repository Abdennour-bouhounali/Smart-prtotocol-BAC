import React, { useRef, memo } from 'react';
import { usePagination } from '../hooks/usePagination';

/**
 * SectionViewer renders a single book section in its own isolated pagination context.
 *
 * Visibility strategy:
 *   - The active section is fully visible (`position: relative`, normal flow).
 *   - Inactive sections are visually hidden but still laid out
 *     (`position: absolute; visibility: hidden`) so their `clientHeight` is
 *     valid, allowing `usePagination` to compute correct page breaks even while
 *     the section is not currently shown.
 *
 * The component is memoized so that navigating between sections (which changes
 * `isVisible` on the previously-active and newly-active section) does NOT cause
 * the content of unrelated sections to re-render at all.
 */
const SectionViewer = memo(({ section, bookName, isVisible }) => {
    const editorRef = useRef(null);

    // Each section has its own independent usePagination instance.
    // Only this section re-paginates when its own content changes.
    usePagination(editorRef, bookName, [section.id]);

    const SectionComponent = section.Component;

    return (
        <div
            className="section-viewer-wrapper"
            style={
                isVisible
                    ? {
                          position: 'relative',
                          width: '100%',
                          height: '100%',
                      }
                    : {
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          visibility: 'hidden',
                          pointerEvents: 'none',
                          zIndex: -1,
                      }
            }
        >
            <div className="main-view">
                <div
                    id={`editor-${section.id}`}
                    ref={editorRef}
                    contentEditable="true"
                    spellCheck="false"
                    suppressContentEditableWarning={true}
                >
                    <SectionComponent />
                </div>
            </div>
        </div>
    );
}, (prevProps, nextProps) => {
    // Custom equality: only re-render when something meaningful changes.
    // Crucially, changing the active section in the parent only updates
    // `isVisible` on two viewers; all others remain untouched.
    return (
        prevProps.section.id === nextProps.section.id &&
        prevProps.bookName === nextProps.bookName &&
        prevProps.isVisible === nextProps.isVisible
    );
});

SectionViewer.displayName = 'SectionViewer';

export default SectionViewer;
