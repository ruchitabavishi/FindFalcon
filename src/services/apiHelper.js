import axios from 'axios'

const baseURL = 'https://findfalcone.herokuapp.com'

export default axios.create({
    baseURL,
    headers: {
        Accept: 'application/json'
    }
})