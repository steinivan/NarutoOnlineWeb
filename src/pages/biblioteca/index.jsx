import { useState, useContext, useEffect } from 'react';
import CardComponents from '../../componentes/card'

import { cardApi } from '../../services'
function Biblioteca(){
    const [product,setProduct] = useState([])

    useEffect(()=>{
        setProduct(cardApi())
    },[])

    return(
        <div >
            <h1 className="h-10 bg-orange-800 text-4xl flex items-center justify-center">Biblioteca</h1>
            <div className='grid cards gap-2 w-full bg-sky-600'>
                <h2 className="h-20 font-semibold col-span-full text-2xl flex items-center justify-center">UR</h2>
                {
                    product && <CardComponents usoNombre={true} category="UR" product={product}/>
                }
            </div>
            <div className='grid cards gap-2 w-full bg-sky-600'>
                <h2 className="h-20 font-semibold col-span-full text-2xl flex items-center justify-center">SSR</h2>
                {
                    product && <CardComponents usoNombre={true} category="SSR" product={product}/>
                }
            </div>
            <div className='grid cards gap-2 w-full bg-sky-600'>
                <h2 className="h-20 font-semibold col-span-full text-2xl flex items-center justify-center">SR</h2>
                {
                    product && <CardComponents usoNombre={true} category="SR" product={product}/>
                }
            </div>
            <div className='grid cards gap-2 w-full bg-sky-600'>
                <h2 className="h-20 font-semibold col-span-full text-2xl flex items-center justify-center">R</h2>
                {
                    product && <CardComponents usoNombre={true} category="R" product={product}/>
                }
            </div>
            
                    {/* product.map(element=>{
                        return(
                            
                            <div key={element.id}>
                            <CardComponents  card={element.name} category={element.category} power={element.power} thumbail={element.img} star={element.star}/>
                        </div>
                        
                        )
                    }) */}
            <footer className='z-20 flex h-32 bottom-0 left-0 right-0 fixed bg-orange-900'>
                <div className='flex h-2/4 w-full justify-end'>
                    <h4 className='h-10 w-20 pt-2 mr-5 flex justify-center rounded-b-md bg-cyan-600'><a href="/ninjas">Ninja</a></h4>
                    <h4 className='h-14 w-20 pt-2 mr-10 flex justify-center rounded-b-md bg-orange-400'><a href="#">Biblioteca</a></h4>
                </div>
            </footer>
        </div>
        
    )
}

export default Biblioteca