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
        <div class="footer-bac-plus" dir="ltr" style="font-weight: 900; color: #000000ff; letter-spacing: 1px; text-align: right; font-size: 11pt; padding-right: 15px;">BAC</div>
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
                    if (page.classList.contains('color-report-page')) return;
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
                    if (node.classList && node.classList.contains('color-report-page')) return;
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

    // Clean up previous report pages
    const oldReports = container.querySelectorAll('.color-report-page');
    oldReports.forEach(el => el.remove());

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
    
    // Track unique color conversions
    const conversions = new Map();

    elements.forEach(element => {
        // Skip non-elements
        if (element.nodeType !== Node.ELEMENT_NODE) return;
        
        // Skip elements inside a previous color report if any slipped through
        if (element.closest('.color-report-page')) return;

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

                // Parse and track the color info for the report
                const trimmed = origVal.trim().toLowerCase();
                const match = trimmed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
                if (match) {
                    const r = parseInt(match[1], 10);
                    const g = parseInt(match[2], 10);
                    const b = parseInt(match[3], 10);
                    
                    const cmyk = rgbToCmyk(r, g, b);
                    const key = `${r},${g},${b}`;
                    if (!conversions.has(key)) {
                        conversions.set(key, {
                            original: origVal,
                            converted: converted,
                            cmyk
                        });
                    }
                }
            }
        });
    });

    if (conversions.size > 0) {
        // Log to console for debugging/developer review
        console.group('%c SMART Book - Color Transformation Report (CMYK) ', 'background: #2c3e50; color: #fff; font-weight: bold; padding: 4px;');
        const logTable = [];
        conversions.forEach((info) => {
            logTable.push({
                'Original Color': info.original,
                'CMYK values': `C: ${(info.cmyk.c * 100).toFixed(0)}%, M: ${(info.cmyk.m * 100).toFixed(0)}%, Y: ${(info.cmyk.y * 100).toFixed(0)}%, K: ${(info.cmyk.k * 100).toFixed(0)}%`,
                'Transformed RGB': info.converted,
                'Changed?': info.original !== info.converted ? 'Yes' : 'No'
            });
        });
        console.table(logTable);
        console.groupEnd();

        // Create and append the physical printed page report
        appendColorReportPage(container, conversions);
    }
}

function appendColorReportPage(container, conversions) {
    const reportPage = document.createElement('div');
    reportPage.className = 'page color-report-page';
    reportPage.contentEditable = "false";
    reportPage.style.pageBreakBefore = 'always';
    reportPage.style.breakBefore = 'page';
    
    const content = document.createElement('div');
    content.className = 'page-content';
    content.style.width = '100%';
    content.style.height = 'calc(100% - 25px)';
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    
    const header = document.createElement('div');
    header.style.textAlign = 'center';
    header.style.borderBottom = '2px solid #2c3e50';
    header.style.paddingBottom = '10px';
    header.style.marginBottom = '15px';
    
    const title = document.createElement('h2');
    title.textContent = 'تقرير تحويل الألوان للطباعة (CMYK)';
    title.style.margin = '0';
    title.style.fontSize = '15pt';
    title.style.fontWeight = 'bold';
    title.style.color = '#2c3e50';
    header.appendChild(title);
    
    const subtitle = document.createElement('p');
    subtitle.textContent = 'جدول يوضح الألوان المستخدمة في الكتاب بعد تحويلها لـ CMYK وإعادة حسابها لـ RGB لضمان مطابقة الطباعة.';
    subtitle.style.margin = '5px 0 0 0';
    subtitle.style.fontSize = '10pt';
    subtitle.style.color = '#555';
    header.appendChild(subtitle);
    
    content.appendChild(header);

    // Build Table
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.fontSize = '9.5pt';
    table.style.direction = 'rtl';
    table.style.textAlign = 'right';

    // Table Header
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr style="background-color: #2c3e50; color: white;">
            <th style="padding: 6px 10px; border: 1px solid #ddd; text-align: right;">اللون الأصلي</th>
            <th style="padding: 6px 10px; border: 1px solid #ddd; text-align: center;">نموذج</th>
            <th style="padding: 6px 10px; border: 1px solid #ddd; text-align: left; direction: ltr;">CMYK قيم</th>
            <th style="padding: 6px 10px; border: 1px solid #ddd; text-align: right;">اللون المحول (RGB)</th>
            <th style="padding: 6px 10px; border: 1px solid #ddd; text-align: center;">نموذج</th>
            <th style="padding: 6px 10px; border: 1px solid #ddd; text-align: center;">تغيير</th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    let index = 0;
    conversions.forEach((info) => {
        const cmykText = `C:${(info.cmyk.c * 100).toFixed(0)}% M:${(info.cmyk.m * 100).toFixed(0)}% Y:${(info.cmyk.y * 100).toFixed(0)}% K:${(info.cmyk.k * 100).toFixed(0)}%`;
        const hasChanged = info.original !== info.converted;
        const changeStatusHtml = hasChanged 
            ? `<span style="color: #922b21; font-weight: bold;">معدل</span>` 
            : `<span style="color: #117a65;">ثابت</span>`;
        
        const row = document.createElement('tr');
        row.style.backgroundColor = index % 2 === 0 ? '#fcfcfc' : '#f4f6f7';
        row.innerHTML = `
            <td style="padding: 5px 8px; border: 1px solid #ddd; font-family: monospace; font-size: 8.5pt;">${info.original}</td>
            <td style="padding: 5px 8px; border: 1px solid #ddd; text-align: center;">
                <div style="width: 24px; height: 14px; border: 1px solid #999; border-radius: 2px; background-color: ${info.original}; margin: 0 auto;"></div>
            </td>
            <td style="padding: 5px 8px; border: 1px solid #ddd; font-family: monospace; font-size: 8.5pt; text-align: left; direction: ltr;">${cmykText}</td>
            <td style="padding: 5px 8px; border: 1px solid #ddd; font-family: monospace; font-size: 8.5pt;">${info.converted}</td>
            <td style="padding: 5px 8px; border: 1px solid #ddd; text-align: center;">
                <div style="width: 24px; height: 14px; border: 1px solid #999; border-radius: 2px; background-color: ${info.converted}; margin: 0 auto;"></div>
            </td>
            <td style="padding: 5px 8px; border: 1px solid #ddd; text-align: center; font-size: 9pt;">${changeStatusHtml}</td>
        `;
        tbody.appendChild(row);
        index++;
    });
    table.appendChild(tbody);
    content.appendChild(table);

    // Legend / explanatory note below table
    const note = document.createElement('div');
    note.style.marginTop = '15px';
    note.style.padding = '8px 12px';
    note.style.backgroundColor = '#fdfefe';
    note.style.border = '1px solid #d5dbdb';
    note.style.borderRadius = '4px';
    note.style.fontSize = '8.5pt';
    note.style.color = '#555';
    note.style.lineHeight = '1.4';
    note.innerHTML = `
        <strong>ملاحظات فنية حول نظام ألوان الطباعة:</strong>
        <ul style="margin: 5px 0 0 0; padding-right: 15px;">
            <li>يتم تحويل الألوان من نظام RGB إلى CMYK باستخدام طريقة الحساب القياسية للمطابع.</li>
            <li>تُطبق عتبة استبعاد بنسبة 5% (threshold &lt;= 0.05) للقنوات غير المهيمنة لتفضيل الألوان الصافية وتجنب تشتت الحبر في الطباعة.</li>
            <li>الخلفيات الفاتحة جداً (مثل اللون الرمادي الفاتح جداً والأحمر الفاتح الخاص بالتنبيهات) تم تحويلها تلقائياً إلى اللون الأبيض الصافي لضمان عدم طباعة خلفيات باهتة تشوش على قراءة النصوص والرموز الرياضية.</li>
        </ul>
    `;
    content.appendChild(note);

    reportPage.appendChild(content);

    // Footer
    const footer = document.createElement('div');
    footer.className = 'page-footer';
    
    // Find current page number
    const totalPages = container.querySelectorAll('.page').length;
    
    footer.innerHTML = `
        <div class="footer-bac-plus" dir="ltr" style="font-weight: 900; color: #000000ff; letter-spacing: 1px; text-align: right; font-size: 11pt; padding-right: 15px;">BAC</div>
        <div class="footer-page-num">صفحة ${totalPages + 1}</div>
        <div class="footer-book-name" dir="ltr">تقرير ألوان الطباعة</div>
    `;
    reportPage.appendChild(footer);
    
    container.appendChild(reportPage);
}
