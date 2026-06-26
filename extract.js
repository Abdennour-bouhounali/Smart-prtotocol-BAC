const fs = require('fs');
const content = fs.readFileSync('src/sections/BacIntelligence.jsx', 'utf8');

const regex = /<div className="left-col">([\s\S]*?)<\/div>/g;
let match;
let items = [];

while ((match = regex.exec(content)) !== null) {
    items.push(match[1]);
}

fs.writeFileSync('left_cols.json', JSON.stringify(items, null, 2));
