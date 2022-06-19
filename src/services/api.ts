import axios from 'axios'

const apiVehicles = axios.create({
    baseURL: 'https://api-carpage-production.up.railway.app/'
})

export default apiVehicles