import HeaderUser from '../../componentes/header'
import FooterUser from '../../componentes/footer'

import {DivOption,DivContainerOption,DivContainerOptionElement,DivColor1,DivColor2,DivText,BorderOptionLeft,BorderOptionRight} from './style'
const Adventure=()=>{
    const arrayElement = [
        {nombre:"Arena",tamaño:20},
        {nombre:"Mount Myoboku Training",tamaño:18},
        {nombre:"Training Tower",tamaño:20},
        {nombre:"Genjutsu Maze",tamaño:20},
        {nombre:"Secret Challenges",tamaño:20},
        {nombre:"The Shinobi World War",tamaño:17},
    ]

    const options = arrayElement.map((element)=>{
        // console.log(element)
        return(
            <DivContainerOptionElement to={'/home'} key={element.nombre}>
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
    console.log(options)
    return(
        <div className="h-max FondoAdventure">
            <HeaderUser typeH={"HeaderUser"}/>
            <DivContainerOption className="pt-12 pb-28">
                {options}
            </DivContainerOption>
            <FooterUser typeF={"FooterUser"}/>
            
        </div>
    )
}
export default Adventure