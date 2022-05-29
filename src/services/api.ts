import axios from 'axios'

const apiVehicles = axios.create({
    baseURL: 'http://localhost:3100/'
})

export default apiVehicles