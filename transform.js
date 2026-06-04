const fs = require('fs');
let content = fs.readFileSync('src/sections/Solution_DirectQuestions_Functions.jsx', 'utf8');

// We will use a regex to match the Relate block and the Execute block.
const regex = /<div className="step-row-two">\s*<div className="left-col">\s*<span className="phase-label data">R\. المعطيات والربط \(Relate\)<\/span><br \/>\s*([\s\S]*?)<\/div>\s*<div className="right-col">\s*([\s\S]*?)<\/div>\s*<\/div>\s*<div className="step-row-two">\s*<div className="left-col">\s*<span className="phase-label start">التنفيذ<\/span><br \/>\s*<div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>\s*([\s\S]*?)<\/div>\s*([\s\S]*?)<\/div>\s*<div className="right-col">\s*([\s\S]*?)<\/div>\s*<\/div>/g;

content = content.replace(regex, (match, relateLeft, relateRight, executeBell, executeLeftRest, executeRight) => {
    // Combine left columns: Relate left + Bell div
    const newLeft = `                    <span className="phase-label data">R. المعطيات والربط (Relate)</span><br />
                    ${relateLeft.trim()}
                    <div style={{ backgroundColor: "#eef2ff", border: "1px dashed #3b82f6", padding: "5px", borderRadius: "5px", marginBottom: "4px", marginTop: "4px", color: "#1e40af", fontSize: '11pt' }}>
                        ${executeBell.trim()}
                    </div>`;

    // Combine right columns: Relate right + execute left rest (which is usually calculations) + execute right
    let newRight = relateRight.trim();
    if (newRight && executeLeftRest.trim()) {
        newRight += "<br />\n                    " + executeLeftRest.trim();
    } else if (executeLeftRest.trim()) {
        newRight += executeLeftRest.trim();
    }
    
    if (newRight && executeRight.trim()) {
        newRight += "\n                    " + executeRight.trim();
    } else if (executeRight.trim()) {
        newRight += executeRight.trim();
    }

    return `<div className="step-row-two">
                <div className="left-col">
${newLeft}
                </div>
                <div className="right-col">
                    ${newRight.split('\n').join('\n                    ')}
                </div>
            </div>`;
});

fs.writeFileSync('src/sections/Solution_DirectQuestions_Functions.jsx', content);
console.log('Transformation complete.');
