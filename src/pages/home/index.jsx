import { useDispatch, useSelector } from 'react-redux';
import HeaderUser from '../../componentes/header'
import FooterUser from '../../componentes/footer'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { contadorNivel, exp, aumentarExp,disminuirExp} from '../../redux/actions/cardAccion';

function Home(){
    let navigate = useNavigate();
    const STATE = useSelector(state=>state.cardReducer)
    const StateOn = (STATE.AcountOnline[0])
    const dispatch = useDispatch()
    console.log(STATE)
    
    return(
        <div className="h-full FondoKonoha ">
            <HeaderUser typeH={"HeaderUser"}/>
            <div className="pt-12">

            <button className='text-2xl bg-yellow-600 p-4 rounded-xl mt-5' onClick={()=>{ dispatch(aumentarExp(500))}}>Exp +</button>
            </div>
            <FooterUser typeF={"FooterUser"}/>
        </div>
    )
}


export default Home