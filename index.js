const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url)

    res.write(`<h1>Hello from Node.js 1</h1>`);
    res.write(`<h2>Hello from Node.js 2</h2>`);
    res.write(`<h3>Hello from Node.js 3</h3>`);
    res.end(`
<div style="width: 200px; font-size: 20px">
<h1 style="color: red">Test</h1>
</div>
`);
})

server.listen(3000, () => {
    console.log("Server is running...")
});