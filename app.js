const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/MonBlog/browser'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/MonBlog/browser/index.html');
})

app.listen(3000, (err) => {
    if (err) throw err;
    console.log('server is running on port 3000');
})