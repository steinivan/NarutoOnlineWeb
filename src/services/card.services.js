import { cardAdapter } from "../adapters"
import jsonNinjas from '../ninjas.json'

export const cardApi = () => {
    const data = jsonNinjas.ninjas
    return data.map(elem => cardAdapter(elem)) 
}