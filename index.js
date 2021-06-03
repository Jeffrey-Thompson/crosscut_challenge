const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let count = 0;

rl.on('line', function() {
    count++;
});

rl.on('close', function() {
    console.log(`There are ${count} lines.`);
});