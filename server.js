import http from 'http'

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html')
    response.statusCode = 200

    const { method } = request

    if (method === 'GET') response.end('<h1>Get!</h1>')
    if (method === 'POST') {
        // curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"tomi\"}"
        let body = []

        request.on('data', (chunk) => {
            body.push(chunk)
        })

        request.on('end', () => {
            body = Buffer.concat(body).toString()
            const { name } = JSON.parse(body)
            response.end(`POST BY ${name}`)
        })
    }


}

const server = http.createServer(requestListener)
const port = 5000
const host = 'localhost'

server.listen(port, host, () => {
    console.log(`server berjalan pada http://${host}:${port}`);
})  