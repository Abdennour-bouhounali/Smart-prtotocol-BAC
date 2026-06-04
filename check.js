const fs = require('fs');
let content = fs.readFileSync('src/sections/Solution_DirectQuestions_Functions.jsx', 'utf8');

const regex = /<div className="sub-question">([\s\S]*?)<\/div>[\s\S]*?<div className="step-row-two">\s*<div className="left-col">\s*<span className="phase-label translate">M. الترجمة \(Translate\)<\/span>([\s\S]*?)<\/div>\s*<\/div>/g;

let match;
while ((match = regex.exec(content)) !== null) {
    console.log("--------------------------------------------------");
    console.log("QUESTION: " + match[1]);
    console.log("TRANSLATE: " + match[2]);
}
