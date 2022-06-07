import { useState, useEffect } from 'react';
import CardComponents from '../card'
import { myCardApi } from '../../services'
function Ninjas(){
    const [product,setProduct] = useState(myCardApi)

    useEffect(()=>{
        const data = myCardApi
        setProduct(data)
        
    },[])
    // console.log(product)
    return(
        <div className='pt-3 grid cards gap-2 w-full'>
            {
                product.map(elem=>{
                    return(
                        <CardComponents key={elem.name} card={elem.name} category=""/>
                    )
                })
            }
        </div>
    )
}
export default Ninjas