import { useLayoutEffect, useCallback } from 'react';

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
        <div class="footer-bac-plus" dir="ltr" style="font-weight: 900; color: #000000ff; letter-spacing: 1px; text-align: right; font-size: 11pt; padding-right: 15px;">BAC+</div>
        <div class="footer-page-num">صفحة ${pageIndex + 1}</div>
        <div class="footer-book-name" dir="rtl">${bookName || ''}</div>
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
            });
        } else {
            if (options.isPrint) {
                applyPrintColorPipeline(editor);
            }
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

// RGB/RGBA to CMYK and back to RGB CMYK pipeline for printing
function rgbToCmyk(r, g, b) {
    const rn = r / 255;
    const gn = g / 255;
    const bn = b / 255;

    let k = 1 - Math.max(rn, gn, bn);
    let c = k === 1 ? 0 : (1 - rn - k) / (1 - k);
    let m = k === 1 ? 0 : (1 - gn - k) / (1 - k);
    let y = k === 1 ? 0 : (1 - bn - k) / (1 - k);

    // Apply thresholds: if any channel is <= 0.05, make it 0.0 to prefer dominant channels
    if (c <= 0.05) c = 0;
    if (m <= 0.05) m = 0;
    if (y <= 0.05) y = 0;
    if (k <= 0.05) k = 0;

    return {
        c: Math.round(c * 10000) / 10000,
        m: Math.round(m * 10000) / 10000,
        y: Math.round(y * 10000) / 10000,
        k: Math.round(k * 10000) / 10000
    };
}

function cmykToRgb({ c, m, y, k }) {
    const r = Math.round(255 * (1 - c) * (1 - k));
    const g = Math.round(255 * (1 - m) * (1 - k));
    const b = Math.round(255 * (1 - y) * (1 - k));
    return { r, g, b };
}

function convertColorToPrintRgb(colorStr) {
    if (!colorStr) return colorStr;
    
    // Normalize string and check if it's transparent
    const trimmed = colorStr.trim().toLowerCase();
    if (trimmed === 'transparent' || trimmed === 'rgba(0, 0, 0, 0)') {
        return colorStr;
    }

    // Match rgb or rgba
    const match = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (!match) return colorStr; // Not a parseable RGB color (like inherit, initial, etc.)

    const r = parseInt(match[1], 10);
    const g = parseInt(match[2], 10);
    const b = parseInt(match[3], 10);
    const a = match[4] !== undefined ? parseFloat(match[4]) : 1.0;

    if (a === 0) return colorStr;

    // Convert to CMYK and back to RGB
    const cmyk = rgbToCmyk(r, g, b);
    const rgbOut = cmykToRgb(cmyk);

    if (match[4] !== undefined) {
        return `rgba(${rgbOut.r}, ${rgbOut.g}, ${rgbOut.b}, ${a})`;
    } else {
        return `rgb(${rgbOut.r}, ${rgbOut.g}, ${rgbOut.b})`;
    }
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

    // Get all elements within the container, plus the container itself
    const elements = [container, ...Array.from(container.querySelectorAll('*'))];

    elements.forEach(element => {
        // Skip non-elements
        if (element.nodeType !== Node.ELEMENT_NODE) return;

        const computed = window.getComputedStyle(element);

        properties.forEach(({ name, attr }) => {
            let origVal = element.getAttribute(attr);
            if (origVal === null) {
                // Read original value: inline style takes priority, then stylesheet computed style, or fallback to empty
                origVal = element.style[name] || computed[name] || '';
                element.setAttribute(attr, origVal);
            }

            if (origVal && origVal !== 'initial' && origVal !== 'inherit' && origVal !== 'transparent' && origVal !== 'rgba(0, 0, 0, 0)') {
                const converted = convertColorToPrintRgb(origVal);
                if (converted && converted !== origVal) {
                    element.style[name] = converted;
                }
            }
        });
    });
}
