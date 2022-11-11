import http from 'http'

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json')
    response.setHeader('X-Powered-By', 'tomj')
    response.statusCode = 200


    response.end('{name: "tomj", age: 19}')


}

const server = http.createServer(requestListener)
const port = 5000
const host = 'localhost'

server.listen(port, host, () => {
    console.log(`server berjalan pada http://${host}:${port}`);
})  