import Repository from '../services/apiHelper'

const planets = '/planets'
const vehicles = '/vehicles'
const token = '/token'
const find = '/find'
export default {
    getPlanets() {
        return Repository.get(`${planets}`)
    },
    getVehicles() {
        return Repository.get(`${vehicles}`)
    },
    getToken() {
        //headers = {}
        return Repository.post(`${token}`, { body: {} })
    },
    find(payload) {
        debugger
        return Repository.post(`${find}`, payload
        )
    }
}