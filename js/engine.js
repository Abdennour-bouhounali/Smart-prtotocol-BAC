let isPaginating = false;

function exportToWord() {
    const editor = document.getElementById('editor');
    const flatContainer = document.createElement('div');
    flatContainer.setAttribute('dir', 'rtl');

    const contents = editor.querySelectorAll('.page-content');
    if (contents.length > 0) {
        contents.forEach(content => {
            Array.from(content.childNodes).forEach(node => {
                flatContainer.appendChild(node.cloneNode(true));
            });
        });
    } else {
        Array.from(editor.childNodes).forEach(node => {
            flatContainer.appendChild(node.cloneNode(true));
        });
    }

    const styleElement = document.querySelector('style') ? document.querySelector('style').outerHTML : '';

    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
        "xmlns:w='urn:schemas-microsoft-com:office:word' " +
        "xmlns='http://www.w3.org/TR/REC-html40'>" +
        "<head><meta charset='utf-8'>" + styleElement + "</head><body><div dir='rtl'>";

    const footer = "</div></body></html>";
    const sourceHTML = header + flatContainer.innerHTML + footer;

    const blob = new Blob(['\ufeff', sourceHTML], {
        type: 'application/msword;charset=utf-8'
    });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Exercise-Print.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function saveCaret() {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return null;
    const range = sel.getRangeAt(0);

    const editor = document.getElementById('editor');
    if (!editor.contains(range.startContainer)) return null;

    const marker = document.createElement('span');
    marker.id = 'caret-marker';
    range.insertNode(marker);
    return marker;
}

function restoreCaret() {
    const marker = document.getElementById('caret-marker');
    if (marker) {
        const sel = window.getSelection();
        const range = document.createRange();
        range.setStartBefore(marker);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        marker.remove();
    }
}

function updateBookName() {
    const bookName = document.getElementById('book-name-input').value;
    document.querySelectorAll('.footer-book-name').forEach(el => {
        el.textContent = bookName;
    });
}

function createPage(editor) {
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

    const bookName = document.getElementById('book-name-input') ? document.getElementById('book-name-input').value : '';

    footer.innerHTML = `
                <div></div>
                <div class="footer-page-num"></div>
                <div class="footer-book-name" dir="rtl">${bookName}</div>
            `;

    page.appendChild(footer);
    editor.appendChild(page);
    return content;
}

function paginateContent() {
    if (isPaginating) return;
    isPaginating = true;

    const editor = document.getElementById('editor');
    saveCaret();

    const allNodes = [];
    const existingPages = editor.querySelectorAll('.page');

    if (existingPages.length > 0) {
        existingPages.forEach(page => {
            const content = page.querySelector('.page-content');
            if (content) {
                Array.from(content.childNodes).forEach(node => allNodes.push(node));
            }
            Array.from(page.childNodes).forEach(n => {
                if (n !== content && (!n.classList || !n.classList.contains('page-footer'))) {
                    allNodes.push(n);
                }
            });
        });
        Array.from(editor.childNodes).forEach(n => {
            if (n.nodeType === Node.TEXT_NODE || (n.nodeType === Node.ELEMENT_NODE && !n.classList.contains('page'))) {
                allNodes.push(n);
            }
        });
    } else {
        Array.from(editor.childNodes).forEach(node => allNodes.push(node));
    }

    editor.innerHTML = '';
    let currentContent = createPage(editor);
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
            currentContent = createPage(editor);
            currentContent.appendChild(node);
            pageNodes = 1;
        } else if (currentContent.scrollHeight > currentContent.clientHeight && pageNodes > 1) {
            const nodesToMove = [node];
            currentContent.removeChild(node);
            pageNodes--;

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

            currentContent = createPage(editor);
            nodesToMove.forEach(n => {
                currentContent.appendChild(n);
                pageNodes++;
            });
        }
    });

    const pages = editor.querySelectorAll('.page');
    pages.forEach((page, index) => {
        const num = page.querySelector('.footer-page-num');
        if (num) num.textContent = `صفحة ${index + 1}`;
    });

    restoreCaret();
    isPaginating = false;
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

const debouncedPaginate = debounce(paginateContent, 500);

document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    paginateContent();

    editor.addEventListener('input', () => {
        if (!isPaginating) {
            debouncedPaginate();
        }
    });

    editor.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const sel = window.getSelection();
            if (!sel || !sel.rangeCount) return;
            let node = sel.anchorNode;
            if (node && node.nodeType === Node.TEXT_NODE) node = node.parentNode;

            let block = node ? node.closest('.strategy-box, .radar-box, .step-row, .question-header, .sub-question, .exercise-statement') : null;
            if (block && block.textContent.trim() === '') {
                block.className = '';
                block.innerHTML = '<br>';
                const range = document.createRange();
                range.selectNodeContents(block);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
                debouncedPaginate();
            }
        }
    });

    window.addEventListener('resize', debouncedPaginate);
    if (document.fonts) document.fonts.ready.then(debouncedPaginate);
});