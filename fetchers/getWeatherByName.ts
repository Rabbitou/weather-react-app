import axios from 'axios'
import { endpoint } from '../endpoint/endpoint'

export const getWeatherByName = async() => {
    const res = await axios.get(endpoint,{params: {
        q:'Casablanca', appid: process.env.API_KEY
    }})
}