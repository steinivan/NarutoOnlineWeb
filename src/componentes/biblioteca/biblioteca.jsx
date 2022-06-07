import { useState, useEffect } from 'react';
import CardComponents from '../card'

import { cardApi } from '../../services'
function Biblioteca(){
    const [product,setProduct] = useState(cardApi)

    useEffect(()=>{
        setProduct(cardApi())
    },[])
    return(
        <div>
            <h1 className="h-10 bg-orange-800 text-4xl flex items-center justify-center">Biblioteca</h1>
            <div className='grid cards gap-2 w-full'>
                <h2 className="h-20 font-semibold col-span-full text-2xl flex items-center justify-center">UR</h2>
                {
                    product && <CardComponents key={"UR"} category="UR" type="biblioteca"/>
                }
            </div>
            <div className='grid cards gap-2 w-full'>
                <h2 className="h-20 font-semibold col-span-full text-2xl flex items-center justify-center">SSR</h2>
                {
                    product && <CardComponents key={"SSR"} category="SSR" type="biblioteca"/>
                }
            </div>
            <div className='grid cards gap-2 w-full'>
                <h2 className="h-20 font-semibold col-span-full text-2xl flex items-center justify-center">SR</h2>
                {
                    product && <CardComponents key={"SR"} category="SR" type="biblioteca"/>
                }
            </div>
            <div className='grid cards gap-2 w-full'>
                <h2 className="h-20 font-semibold col-span-full text-2xl flex items-center justify-center">R</h2>
                {
                    product && <CardComponents key={"R"} category="R" type="biblioteca"/>
                }
            </div>
        </div>
        
    )
}
export default Biblioteca