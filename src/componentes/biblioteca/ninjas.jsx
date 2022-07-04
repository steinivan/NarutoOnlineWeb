import { useState, useEffect } from 'react';
import CardComponents from '../card'
import { myCardApi } from '../../services'
function Ninjas(){
    const [product,setProduct] = useState(myCardApi())

    return(
        <div className='pt-3 grid cards gap-2 w-full'>
            {
                product.map(elem=>{
                    console.log(elem)
                    let valueKey = elem.key;
                    if(valueKey>0) {valueKey = `-${valueKey}`} else {valueKey = ""}
                    return(
                        <CardComponents key={elem.name+valueKey} card={elem.name} category="" />
                    )
                })
            }
        </div>
    )
}
export default Ninjas