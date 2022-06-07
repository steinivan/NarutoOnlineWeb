import HeaderUser from '../../componentes/header'
import FooterUser from '../../componentes/footer'
import {DivOption,DivContainerOption,DivContainerOptionElement,DivColor1,DivColor2,DivText,BorderOptionLeft,BorderOptionRight} from './style'
import { useState,useEffect } from 'react'
import Adivination from '../../componentes/luckyAdivination/adivination'

const City = ()=>{
    const [change,setChange] = useState("menu")
    const [lucky,setLucky] = useState("Lucky Adivination")
    const [header,setHeader] = useState([HeaderUser])
    const [footer,setFooter] = useState([FooterUser])
    useEffect(()=>{
        if(change==="Adivination"){
            setHeader(<HeaderUser typeH={"HeaderLucky"}/>)
            setFooter(<FooterUser typeF={"FooterLucky"} setLucky={setLucky} lucky={lucky} setChange={setChange}/>)
        }
        if(change==="menu" || change.length <= 2){
            setHeader(<HeaderUser typeH={"HeaderUser"}/>)
            setFooter(<FooterUser typeF={"FooterUser"} setLucky={setLucky} lucky={lucky}  setChange={setChange}/>)
        }
    },[change,lucky])

    const arrayElement = [
            {nombre:"Shinobi Collaboration",tamaño:20,component:0},
            {nombre:"LeaderBoard",tamaño:18,component:0},
            {nombre:"Shop",tamaño:20,component:0},
            {nombre:"Shinobi Base",tamaño:20,component:0},
            {nombre:"Guild",tamaño:20,component:0},
            {nombre:"Lucky Divination",tamaño:17},
            {nombre:"Bond",tamaño:17,component:0},
            {nombre:"Shinobi Dismissal",tamaño:17,component:0},
        ]

        
    
        const menu= ()=>{
            return(
            <div className="h-max FondoAdventure">
                <DivContainerOption className="pt-12 pb-28">
                    {
                        arrayElement.map((element)=>{
                            return(
                                <DivContainerOptionElement key={element.nombre} onClick={()=>{
                                    setChange("Adivination")
                                }}>
                                    <BorderOptionLeft/>
                                    <DivOption>
                                        <DivColor1>
                                            <DivColor2>
                                                <DivText tamaño={element.tamaño}>{element.nombre}</DivText>
                                            </DivColor2>
                                        </DivColor1>
                                    </DivOption>
                                    <BorderOptionRight/>
                                </DivContainerOptionElement>
                            )
                        })
                    }
                </DivContainerOption>
            </div>
            )
        }
        
        return(
            <>
    {header ? header : null}
        {change==="Adivination" ? <Adivination/> : menu() ||
        change==="menu" ? menu() : null
        }

    {footer ? footer : null}
    </>
)
}
export default City