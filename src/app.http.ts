import http from 'http';
import fs from 'fs';

// (() => {
//     console.log("Hola");
// })();

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === '/') {
        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(htmlFile)
        return;
    }
    if(req.url?.endsWith('.js')){
        res.writeHead(200, {"content-type": "application/javascript"});
    }else if (req.url?.endsWith('.css')){
        res.writeHead(200, {"content-type": "text/css"});
    }

    const responseContent = fs.readFileSync(`./public${req.url}`, 'utf-8');
    res.end(responseContent);

});

server.listen(8080, () => {
    console.log("Server running on port 8080")
});