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
    
    
    return(
        <div className="h-full FondoKonoha ">
            <HeaderUser typeH={"HeaderUser"}/>
            <div className="pt-12">
                <h1>Hi Ninja de mrda</h1>
            <button onClick={()=>{ dispatch(aumentarExp(500))}}>win</button>
            </div>
            <FooterUser typeF={"FooterUser"}/>
        </div>
    )
}


export default Home