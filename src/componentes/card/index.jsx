import './card.css';
import { useState, useContext, useEffect } from 'react';
import { cardSSR, StarCard } from '../../utils'
const CardComponents = ({card,category,thumbail,power,star, product,usoNombre})=>{
    const [ninja, setNinja] = useState([])
    useEffect(() => {
        setNinja([...cardSSR(card, category, product)])
    },[product])
    console.log(ninja)
    return(
            ninja.map(e=>{
                return(
                        <div className={`items-center justify-center flex flex-col `}>
                            <h1 className='text-center'>{usoNombre===true ? `${e.name}` : ''}</h1>
                            <div className='relative h-48 w-30 '>
                                <p className={"z-20 top-0 right-1 absolute h-6 w-7 text-center "+`text${e.category}`}>{e.category}</p>
                                <img className='rounded z-0 object-cover h-full' src={`../src/img/${e.img}`} alt="phone"/>
                                <StarCard star={e.star}/>
                            </div>
                        </div>
                )
            })
    )
}
export default CardComponents;
