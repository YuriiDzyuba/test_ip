const express = require('express')
const app = express()
const port = 3000
const publicIp = require('public-ip');

app.get('/', (req, res) => {
    (async () => {
        const Ip = await publicIp.v4();
        res.send(`${Ip} - default`)
    })();
})

app.get('/time100', (req, res) => {
    (async () => {
        const Ip = await publicIp.v4({timeout:100});
        res.send(`${Ip} - timeout:100`)
    })();
})

app.get('/time1000', (req, res) => {
    (async () => {
        const Ip = await publicIp.v4({timeout:1000});
        res.send(`${Ip} - timeout:1000`)
    })();
})

app.get('/time3000', (req, res) => {
    (async () => {
        const Ip = await publicIp.v4({timeout:3000});
        res.send(`${Ip} - timeout:3000`)
    })();
})

app.post('/time3000', (req, res) => {
    (async () => {
        const Ip = await publicIp.v4({timeout:3000});
        res.send(`${Ip} - timeout:3000`)
    })();
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})