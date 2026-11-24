const fs = require('fs');

fs.writeFileSync('demo.txt', 'Hello, this is a demo file created using Node.js fs module.');
let data = fs.readFileSync('demo.txt', 'utf8');
console.log(data);

fs.appendFileSync('demo.txt', '\nThis line is appended to the demo file.');
data = fs.readFileSync('demo.txt', 'utf8');
console.log(data);

