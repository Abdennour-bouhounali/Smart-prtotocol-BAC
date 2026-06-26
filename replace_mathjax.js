const fs = require('fs');
const path = require('path');

const dir = 'src/sections';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // We replace \( ... \) with \[ ... \] if it contains \lim
    // We use a regex that handles potential unescaped parenthesis if any, but \( \) is standard MathJax inline delimiter.
    // However, non-greedy [\s\S]*? might stop at the first \) even if there are nested ones, but usually MathJax doesn't have literal \).
    // Wait, a literal \) inside inline math? Probably not, since \) closes it.
    // What if there is a literal closing parenthesis `)`?
    // The regex \\\(([\s\S]*?)\\\) stops at the first `\)`.
    // That is perfectly correct because `\)` is the closing delimiter.
    
    content = content.replace(/\\\(([\s\S]*?)\\\)/g, (match, inner) => {
        if (inner.includes('\\lim')) {
            return `\\[${inner}\\]`;
        }
        return match;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${file}`);
    }
});
