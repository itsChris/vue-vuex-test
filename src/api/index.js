const data = require('./mock-data')
const latency = 1234

export function getAllCars (cb) {
    setTimeout(() => {
        cb(data)
    }, latency)
}