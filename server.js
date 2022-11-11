import http from 'http'

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html')
    response.statusCode = 200
    response.end('<h1>HTTP SERVER !</h1>')
}

const server = http.createServer(requestListener)
const port = 5000
const host = 'localhost'

server.listen(port, host, () => {
    console.log(`server berjalan pada http://${host}:${port}`);
})