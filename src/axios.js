import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://dating-app-mern-backend.herokuapp.com/'
})

export default instance