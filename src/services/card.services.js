import { cardAdapter } from "../adapters"
import jsonNinjas from '../ninjas.json'
import{ myCards } from '../utils'

export const cardApi = () => {
    const data = jsonNinjas.ninjas
    return data.map(elem => cardAdapter(elem)) 
}
export const myCardApi = () => {
    const data = myCards()
    return data
}