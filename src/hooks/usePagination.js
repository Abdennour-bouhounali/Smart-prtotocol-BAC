import { useLayoutEffect, useCallback } from 'react';
import { getStaticCmyk } from '../constants/colors';


/**
 * Hook to handle A4 pagination of content.
 * @param {Object} containerRef - React ref to the editor container
 * @param {string} bookName - Name of the book for footer
 * @param {any} dependencies - Dependencies that trigger re-pagination
 */
export const usePagination = (containerRef, bookName, dependencies = [], options = {}) => {
    const createPage = useCallback((editor, pageIndex) => {
        const page = document.createElement('div');
        page.className = 'page';
        page.contentEditable = "false";

        const content = document.createElement('div');
        content.className = 'page-content';
        content.contentEditable = "true";
        page.appendChild(content);

        const footer = document.createElement('div');
        footer.className = 'page-footer';
        footer.contentEditable = "false";

        footer.innerHTML = `
        <div class="footer-bac-plus" dir="ltr" style="font-weight:900;color:#000000;letter-spacing:1px;text-align:right;font-size:11pt;padding-right:15px;">BAC</div>
        <div class="footer-page-num">صفحة ${pageIndex + 1}</div>
        <div class="footer-book-name" dir="ltr">${bookName || ''}</div>
    `;

        page.appendChild(footer);
        editor.appendChild(page);
        return content;
    }, [bookName]);

    const paginateContent = useCallback(() => {
        const editor = containerRef.current;
        if (!editor) return;

        // Save scroll position or selection if needed (skipped for simplicity in React)

        const extractNodes = () => {
            const nodes = [];
            const pages = editor.querySelectorAll('.page');

            if (pages.length > 0) {
                pages.forEach(page => {
                    const content = page.querySelector('.page-content');
                    if (content) {
                        Array.from(content.childNodes).forEach(node => {
                            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() === '') return;
                            nodes.push(node);
                        });
                    }
                });
            } else {
                Array.from(editor.childNodes).forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() === '') return;
                    nodes.push(node);
                });
            }
            return nodes;
        };

        const allNodes = extractNodes();
        editor.innerHTML = '';
        if (allNodes.length === 0) return;

        let pageIndex = 0;
        let currentContent = createPage(editor, pageIndex);
        let pageNodes = 0;

        allNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() === '') {
                return;
            }

            currentContent.appendChild(node);
            pageNodes++;

            let shouldBreak = false;
            if (node.nodeType === Node.ELEMENT_NODE) {
                const style = window.getComputedStyle(node);
                if (node.classList.contains('manual-break') ||
                    style.pageBreakBefore === 'always' ||
                    style.breakBefore === 'page') {
                    shouldBreak = true;
                }
            }

            if (shouldBreak && pageNodes > 1) {
                currentContent.removeChild(node);
                pageNodes--;
                pageIndex++;
                currentContent = createPage(editor, pageIndex);
                currentContent.appendChild(node);
                pageNodes = 1;
            } else if (currentContent.scrollHeight > currentContent.clientHeight && pageNodes > 1) {
                const nodesToMove = [node];
                currentContent.removeChild(node);
                pageNodes--;

                // Pagination "avoid" logic (headers/sub-questions)
                while (pageNodes > 0) {
                    const prevNode = currentContent.lastChild;
                    if (!prevNode) break;

                    if (prevNode.nodeType === Node.ELEMENT_NODE) {
                        const style = window.getComputedStyle(prevNode);
                        if (style.pageBreakAfter === 'avoid' ||
                            style.breakAfter === 'avoid' ||
                            prevNode.classList.contains('col-header-row') ||
                            prevNode.classList.contains('sub-question')) {
                            nodesToMove.unshift(prevNode);
                            currentContent.removeChild(prevNode);
                            pageNodes--;
                            continue;
                        }
                    }
                    break;
                }

                pageIndex++;
                currentContent = createPage(editor, pageIndex);
                nodesToMove.forEach(n => {
                    currentContent.appendChild(n);
                    pageNodes++;
                });
            }
        });

        // Update Table of Contents page numbers dynamically
        const pages = editor.querySelectorAll('.page');
        pages.forEach((page, index) => {
            const pageNum = index + 1;
            const elementsWithId = page.querySelectorAll('[id]');
            elementsWithId.forEach(el => {
                const tocNumEl = editor.querySelector(`.toc-page-num[data-target-id="${el.id}"]`);
                if (tocNumEl) {
                    tocNumEl.textContent = pageNum;
                }
            });
        });

        // Trigger MathJax if available
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([editor]).then(() => {
                if (options.isPrint) {
                    applyPrintColorPipeline(editor);
                }
                document.body.setAttribute('data-pdf-ready', 'true');
            });
        } else {
            if (options.isPrint) {
                applyPrintColorPipeline(editor);
            }
            document.body.setAttribute('data-pdf-ready', 'true');
        }
    }, [createPage, containerRef, options.isPrint]);

    useLayoutEffect(() => {
        // Initial pagination
        paginateContent();

        // Setup MutationObserver to re-paginate on content changes
        const observer = new MutationObserver(debounce(() => {
            paginateContent();
        }, 500));

        if (containerRef.current) {
            observer.observe(containerRef.current, {
                childList: true,
                subtree: true,
                characterData: true
            });
        }

        return () => observer.disconnect();
    }, [paginateContent, containerRef, ...dependencies]);

    return { paginate: paginateContent };
};

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

function applyPrintColorPipeline(container) {
    if (!container) return;

    const properties = [
        { name: 'color', attr: 'data-orig-color' },
        { name: 'backgroundColor', attr: 'data-orig-bg-color' },
        { name: 'borderColor', attr: 'data-orig-border-color' },
        { name: 'borderTopColor', attr: 'data-orig-border-top-color' },
        { name: 'borderRightColor', attr: 'data-orig-border-right-color' },
        { name: 'borderBottomColor', attr: 'data-orig-border-bottom-color' },
        { name: 'borderLeftColor', attr: 'data-orig-border-left-color' },
        { name: 'fill', attr: 'data-orig-fill' },
        { name: 'stroke', attr: 'data-orig-stroke' }
    ];

    const elements = [container, ...Array.from(container.querySelectorAll('*'))];

    elements.forEach(element => {
        if (element.nodeType !== Node.ELEMENT_NODE) return;
        const computed = window.getComputedStyle(element);

        properties.forEach(({ name, attr }) => {
            let origVal = element.getAttribute(attr);
            if (origVal === null) {
                origVal = element.style[name] || computed[name] || '';
                element.setAttribute(attr, origVal);
            }

            if (origVal && origVal !== 'initial' && origVal !== 'inherit') {
                const cmyk = getStaticCmyk(origVal);
                if (cmyk) {
                    const cmykStr = `device-cmyk(${cmyk[0]}%, ${cmyk[1]}%, ${cmyk[2]}%, ${cmyk[3]}%)`;
                    element.style.setProperty(name, cmykStr);
                }
            }
        });
    });
}


