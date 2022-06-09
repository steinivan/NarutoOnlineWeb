import { useState, useContext, useEffect } from 'react';
import ComponentBiblioteca from '../../componentes/biblioteca/biblioteca'
import ComponentNinjas from '../../componentes/biblioteca/ninjas'
import { cardApi } from '../../services'
import HeaderUser from '../../componentes/header'
import FooterUser from '../../componentes/footer'
function NinjasBiblioteca(){
    const [product,setProduct] = useState([])
    const [cards, setCards] = useState([])
    const [change, setChange] = useState(true)
    let classNinja = `${change ? 'h-14 w-20 pt-2 mr-5 flex justify-center rounded-b-md bg-orange-400' : 'h-10 w-20 pt-2 mr-5 flex justify-center rounded-b-md bg-cyan-600'}`
    let classBiblioteca = `${change ? 'h-10 w-20 pt-2 mr-5 flex justify-center rounded-b-md bg-cyan-600' : 'h-14 w-20 pt-2 mr-5 flex justify-center rounded-b-md bg-orange-400'}`
    useEffect(()=>{
        setProduct(cardApi())
        setCards(<ComponentNinjas/>)
    },[])
    // console.log(cards)
    function select(event){
        event = event.target
        if(event.textContent === "Ninja"){
            setCards(<ComponentNinjas/>)
            setChange(true)
        } else {
            setCards(<ComponentBiblioteca/>)
            setChange(false)giT
        }
    }

    return(
        <div className='pt-12 pb-48 min-h-full bg-fondoBiblioteca'>
            <HeaderUser typeH={"HeaderUser"}/>
            {/* <div className='pt-16 h-full pb-44 grid cards gap-2 w-full'> */}
            {
                cards
            }
            <div className='flex h-20 w-full justify-end z-40 bottom-20 left-0 right-0 fixed footerBiblioteca'>
                <h4 className={classNinja}><button onClick={select}>Ninja</button></h4>
                <h4 className={classBiblioteca}><button onClick={select}>Biblioteca</button></h4>
            </div>
            <FooterUser typeF={"FooterUser"}/>
        </div>
        )

}
export default NinjasBiblioteca