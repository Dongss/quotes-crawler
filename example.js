const GetQuotes = require('./build');
const fs = require('fs');

// get quotes of page 1 and page 2
GetQuotes(1, 2).then(v => {
    console.log(`total: ${v.length}`);
    fs.writeFileSync('./data.json', JSON.stringify(v));
})