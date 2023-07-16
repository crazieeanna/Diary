const express = require('express');
const app = express();

diaryEntries = [
    {id: 1, date: 'July 15th', entry: 'Entry 0'},
    {id: 2, date: 'July 16th', entry: 'Entry 1'},
    {id: 3, date: 'July 17th', entry: 'Entry 2'}
];

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})
app.use('/diary-entries',(req, res, next) => {
    res.json({'diaryEntries': diaryEntries});
})

module.exports = app;