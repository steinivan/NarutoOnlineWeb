import { useState, useContext, useEffect } from 'react';
import CardComponents from '../../componentes/card'
import { cardApi } from '../../services'

function NinjasBiblioteca(){
    const [product,setProduct] = useState([])

    useEffect(()=>{
        setProduct(cardApi())
    },[])

    return(
        <div className='pt-12'>
            <div className='grid cards gap-2 w-full bg-sky-600'>
            {
                product && <CardComponents usoNombre={false} category="SSR" product={product}/>
            }
            <CardComponents usoNombre={false} category="UR" product={product}/>
            <CardComponents usoNombre={false} category="R" product={product}/>
            <CardComponents usoNombre={false} category="SR" product={product}/>
            <CardComponents usoNombre={false} category="SR" product={product}/>
            <CardComponents usoNombre={false} category="SR" product={product}/>
            </div>
                <div className='flex h-20 w-full justify-end z-20 bottom-20 left-0 right-0 fixed bg-orange-900'>
                    <h4 className='h-14 w-20 pt-2 mr-5 flex justify-center rounded-b-md bg-orange-400'><a href="#">Ninja</a></h4>
                    <h4 className='h-10 w-20 pt-2 mr-10 flex justify-center rounded-b-md bg-cyan-600'><a href="/biblioteca">Biblioteca</a></h4>
                </div>
        </div>
    )
}
export default NinjasBiblioteca