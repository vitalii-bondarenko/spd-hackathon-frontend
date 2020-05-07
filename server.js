const express = require('express');
const http = require('http');
const path = require('path');
const compression = require('compression');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, 'dist/client')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/client/index.html'));
});

app.set('port', PORT);
const server = http.createServer(app);
server.listen(PORT, () => console.log(`server started at port ${PORT}`));
