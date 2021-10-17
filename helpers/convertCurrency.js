const https = require("https");



async function convert(value) {
    return new Promise((resolve, reject) => {

        URL = `https://api.exchangerate.host/convert?from=BRL&to=USD&amount=${value}`

        const result = https.get(URL, res => {
            res.on('data', d => {
                resolve(JSON.parse(d))
            });

            res.on('error', (err) => {
                reject(err);
              });
        })
    })


}

module.exports = {
    convert
}