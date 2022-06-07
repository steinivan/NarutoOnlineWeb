import './card.css';
import { useState, useContext, useEffect } from 'react';
import { cardSSR, StarCard } from '../../utils'
import { useSelector } from 'react-redux';
const CardComponents = ({card,category,type})=>{
    const [ninja, setNinja] = useState([...cardSSR(card, category)])
    useEffect(() => {
        setNinja([...cardSSR(card, category)])
    },[category, card])
    const state = useSelector(state=>state.cardReducer)
    const stateCards = state.Acount.card
    return(
        ninja.map(e=>{
                    const statusCardOpacity = "opacity-60"
                    const cardStatus = stateCards.filter(el=>{
                        return el.name === e.name
                    })
                return(
                        <div key={e.name} className={`items-center relative flex flex-col`}>
                                <div className={`relative h-48 w-30`} >
                            {(cardStatus[0] ? cardStatus[0].name : null)!==e.name && <div className={`LockedCard`}>Locked</div> }
                            {(cardStatus[0] ? cardStatus[0].name : null)!==e.name && <div className={`z-20 h-full absolute w-full bg-slate-600 ${statusCardOpacity} `}/> }
                                    {type!=="biblioteca" && <p className={"z-10 top-0 right-1 absolute h-6 w-7 text-center "+`text${e.category}`}>{e.category}</p>}
                                    <img className='rounded z-0 object-cover h-full' src={`../src/img/${e.img}`} alt="phone"/>
                                    <StarCard star={e.star}/>
                                </div>
                        </div>
                )
            })
    )
}
export default CardComponents;
