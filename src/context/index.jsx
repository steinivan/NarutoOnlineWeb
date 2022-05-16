import { createContext, useEffect, useState } from "react";
import json from '../ninjas.json'
export const CardContext = createContext()
export const CartaProvider = (({children})=>{
    const [cardsContext,setCardsContext] = useState([])

    useEffect(()=>{
        function samp(){
            const data = Array.from(json.ninjas)
            setCardsContext(data)
        }
        samp()
    },[])

    return (<CardContext.Provider value={{cardsContext}}>
        {children}
    </CardContext.Provider>)
})
