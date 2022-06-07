import { useSelector, useDispatch } from 'react-redux'
import { Bg,Button,ContainerGuaranted,DivGuaranted,DivGuarantedSelect,ContainDivGuarantedSelect,ContainDivGuarantedSelected,
    ImgGuaranted,ContainerSelect,ContainerGuarantedSelect, BgContainerSelect,GuarantedSelectSSR,
    GuarantedInput,DivGuarantedInput } from './styled'
import {cardApi} from '../../services'
import {addToCard, reductionScrollNormal, GuarantedCard1,GuarantedCard2,GuarantedCard3} from '../../redux/actions/cardAccion'
import { useEffect, useState } from 'react'

const Adivination = ()=>{
    const cards = cardApi()
    const state = useSelector(state=>state.cardReducer)
    const dispatch = useDispatch()
    const stateScrollNormal = state.Acount.scrollNormal
    const stateAcount = state.Acount
    const stateAcountGuaranted1 = state.Acount.GuarantedSSR1
    const stateAcountGuaranted2 = state.Acount.GuarantedSSR2
    const stateAcountGuaranted3 = state.Acount.GuarantedSR
    const stateAcountGuaranted = [stateAcountGuaranted1,stateAcountGuaranted2,stateAcountGuaranted3];
    const dispatchGuaranted = [GuarantedCard1,GuarantedCard2,GuarantedCard3]
    const [select,setSelect] = useState(false)
    const [selectCard,setSelectCard] = useState(null)
    const [typeSSR,setTypeSSR] = useState(null)

    const [arrayAction,setArrayAction] = useState([{pos:0,name:null,src:null},{pos:1,name:null,src:null},{pos:2,name:null,src:null}])
    useEffect(()=>{

    },[])
    

    function scrollCondition(num){
        const arrayCardNumber = []
        if(stateScrollNormal>=num){
            dispatch(reductionScrollNormal(num))
            let cont = 0;
            let max = 0; 
            for (let index = 0; index < num; index++) {
                const ComprobationSSR = arrayCardNumber.includes(elem=>{
                    return elem[0] === "SSR"
                })
                if(cont===9 && !ComprobationSSR){max=1}
                else{max=100}
                let rand = Math.floor((Math.random() * max))
                if (rand<=1) arrayCardNumber.push(["SSR",rand])
                if (rand>1&&rand<=5) arrayCardNumber.push(["SR",rand])
                if (rand>5) arrayCardNumber.push(["R",rand])
                cont++
            }
        const arrayCards = arrayCardNumber.map(cardRandom=>{
            const filterCards = cards.filter(elem=>{
                return cardRandom[0] === elem.category
            })
            return filterCards;
        })
        const sortCards = arrayCards.map(elem=>{
            let max = elem.length; 
            let rand = Math.floor((Math.random() * max))
            return elem[rand]
        })
        sortCards.map(elem=>{
            return dispatch(addToCard(elem.name)) 
        })
        
    }
    
}
    const updateGuaranted = (valor)=>{
        console.log(valor,selectCard)
        const newValor = {pos:selectCard}
        const newArray = arrayAction.map((elem,index)=>{
            console.log(elem,index,selectCard,elem.pos === selectCard)
            elem = index === selectCard ? Object.assign(newValor,valor) : elem
            return elem
        })
    setArrayAction(newArray)
    }

    function selectionActionConfirm(typeAction){
        if(typeAction==="confirm"){
            arrayAction.map((element,index)=>{
                console.log(element,index)
                const selectCardPosition ={pos:index}
                dispatch(dispatchGuaranted[index](Object.assign(selectCardPosition,element)))
                setSelect(false)
            })
        } else {
            setArrayAction([stateAcountGuaranted1,stateAcountGuaranted2,stateAcountGuaranted3])
            setSelect(false)
        }
    }
        
    const SelectCardGuaranted = ()=>{
        
        return(
            <>
                <ContainDivGuarantedSelected >
                        <h3 className='text-sm'>When you draw SSR SR Heroes, you will ha ve a higher 
                            chance to obtain a Wish Lis Hero. You can select up to
                            3 Wish List Heroes per day, each can only be used one.
                        </h3>
                    <ContainDivGuarantedSelect>
                        <DivGuarantedSelect>
                            
                            {
                                arrayAction.map(card=>{
                                    return(
                                        <ContainerGuaranted key={card.pos} onClick={()=>{setSelectCard(card.pos)}}>
                                            <ImgGuaranted src={card.src }  position={card.position} />
                                        </ContainerGuaranted>
                                    )
                                    
                                })
                            }
                        </DivGuarantedSelect>
                    </ContainDivGuarantedSelect>
                </ContainDivGuarantedSelected>
                    
                <div className='h-48 absolute left-0 bottom-0 w-full z-100'>
                    <div className='absolute top-SR left-0 w-36 flex justify-between'>
                        <GuarantedSelectSSR onClick={()=>{setTypeSSR("SSR")}}>SSR</GuarantedSelectSSR>
                        <GuarantedSelectSSR onClick={()=>{setTypeSSR("SR")}}>SR</GuarantedSelectSSR>
                    </div>
                    <ContainerSelect key={"ContainerSelect"}>
                        {cards.map(card=>{
                            const position= `${card.position ? card.position : "25px 5px"}`
                            const name = card.name
                            const src = `../src/img/${card.img}`
                            return(
                                    <ContainerGuarantedSelect key={name} onClick={()=>{updateGuaranted({src,name,position}) }} >
                                        <ImgGuaranted src={src}  position={position}/>
                                    </ContainerGuarantedSelect>
                            )
                        })
                        }
                    </ContainerSelect>
                    <DivGuarantedInput width={`${100}%`}>
                        <GuarantedInput background={"#5E95D7"} padding={`${5}px`} width={`${6.5}em`} onClick={()=>{selectionActionConfirm("close")}}>Close</GuarantedInput>
                        <GuarantedInput background={"#FACE1C"} padding={`${5}px`} width={`${6.5}em`} onClick={()=>{selectionActionConfirm("confirm")}}>Confirm</GuarantedInput>
                    </DivGuarantedInput>
                    
                </div>
            </>
            )}

    return(
        <Bg>
            {select?<BgContainerSelect key="BgSelect" onClick={()=>{selectionActionConfirm("close")}}/>:null}
            <div className='flex flex-col self-end relative'>
                <DivGuaranted>
                    {
                        stateAcountGuaranted.map(card=>{
                            return(
                                <ContainerGuaranted key={card.pos} onClick={()=>{setSelect(true);setSelectCard(card.pos)}}>
                                    <ImgGuaranted src={card.src }  position={card.position} />
                                </ContainerGuaranted>
                            )
                            
                        })
                    }
                </DivGuaranted>

                <div className='justify-between'>
                    <Button onClick={()=>{scrollCondition(1)}}>summon x1</Button>
                    <Button onClick={()=>{scrollCondition(10)}}>summon x10</Button>
                    <button onClick={()=>{console.log(stateAcount)}}>Info</button>

                </div>
            </div>
            {select?SelectCardGuaranted():null}
        </Bg>
    )
}
export default Adivination