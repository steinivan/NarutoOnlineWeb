import { useDispatch, useSelector } from 'react-redux';
import { contadorNivel, exp, aumentarExp,disminuirExp} from '../../redux/actions/cardAccion';
import IconBorushiki from '../../assets/IconBorushiki.jpg'
import { Container,PName, BarraContainer,BarraExp,ContainerMoney,ImgCofre,
    ImgGem,ContainerValues,ImgScrollBlue } from './style'
import { useEffect } from 'react';
import goldImg from '../../assets/gold.png'
import gemImg from '../../assets/gema.png'
import scrollBrownImg from '../../assets/scrollBrown.png'
import scrollGreenImg from '../../assets/scrollBlue.png'
function headerUser({typeH}){
    const state = useSelector(state=>state.cardReducer)
    const dispatch = useDispatch()
    const stateName = state.Acount.name
    const stateScrollNormal = state.Acount.scrollNormal
    const stateScrollAtributes = state.Acount.scrollAtributes
    const statePorcentaje = state.Acount.expP
    let expState = state.Exp
    // console.log("InicioApp-Header ", STATE)
    useEffect(()=>{
        expFunction()
    },[expState])

    const expFunction = ()=>{

    const arrayLevels = state.levels
    let expRestante=0
    const filterLevel = arrayLevels.filter(element=>{
        return element.lvl === state.nivel
    })
    if(state.nivel === 10 && statePorcentaje===100) return
    if( expState - filterLevel[0].requireUp >= 0 ){
        expRestante = expState - filterLevel[0].requireUp

        const filterP = arrayLevels.filter(element=>{
            return element.lvl === (state.nivel + 1) ? state.nivel + 1 : state.nivel
        })
        expRestante = (expRestante / filterP[0].requireUp)*100;
        const stateExpR = filterLevel[0].requireUp
        if(state.nivel===10){
            dispatch(exp(expRestante))
        } else {
            dispatch(contadorNivel(1))
            dispatch(disminuirExp(stateExpR))
            dispatch(exp(expRestante))
        }
    } else {
        if(state.nivel===10 && (expState / filterLevel[0].requireUp)*100){
            dispatch(exp(100))
        } else {
            expRestante = (expState / filterLevel[0].requireUp)*100;
            dispatch(exp(expRestante))
        }
    }
}
    const Header = [
        {HeaderUser:
        <div className="z-50 justify-items-end flex flex-column pl-2 fondoHeader border-black border-solid border h-14 top-0 left-0 right-0 fixed">
        <div className='h-full flex flex-col object-cover justify-end pb-1'>
            <img className="h-10 w-10 rounded-full border-yellow-600 border-2" src={IconBorushiki} alt="" />
        </div>
        <div className='flex flex-col w-full pl-2'>
            <div className='flex w-full justify-between h-4/5 mb-1'>
                <div>
                    <p className="pl-4 text-white text-xs ">{`LV: ${state.nivel}`}</p>
                    <PName>
                        <p className="h-min pl-1 text-base">{stateName}</p>
                    </PName>
                </div>
                <div className='flex justify-end items-center pt-3 w-2/5'>
                    <ContainerMoney width={7} margin={28}>
                        <ImgCofre src={goldImg} alt="oro"/>
                        <p className='w-full'>40M</p>
                    </ContainerMoney>
                    <ContainerMoney width={7} margin={12}>
                        <ImgGem src={gemImg}/>
                        <p>2.000</p>
                    </ContainerMoney>
                </div>
            </div>
            <div className='flex h-min w-full pl-5'>
                <BarraContainer className='rounded-full'>
                    <BarraExp props={statePorcentaje}/>
                </BarraContainer>
            </div>
        </div>
        </div>
        },
        {HeaderLucky:
            <Container>
                <ContainerValues>
                    <ContainerMoney margin={0} width={6}>
                        <ImgGem src={gemImg} alt="gem"/>
                        <p>2.000</p>
                    </ContainerMoney>
                    <ContainerMoney margin={0} width={5}>
                        <ImgGem src={scrollBrownImg} alt="scroll"/>
                        <p>{stateScrollNormal}</p>
                    </ContainerMoney>
                    <ContainerMoney margin={0} width={5}>
                        <ImgScrollBlue src={scrollGreenImg} alt="scroll"/>
                        <p>{stateScrollAtributes}</p>
                    </ContainerMoney>
                </ContainerValues>
            </Container>
        }
    ]

    const typeHeader = Header.filter(elem=>{
        const headerElement = Object.keys(elem)[0]
        return typeH === headerElement
    })
    const headerSelect = Object.keys(typeHeader[0])[0]
    return(
        headerSelect==="HeaderUser" ? typeHeader[0].HeaderUser : null || 
        headerSelect==="HeaderLucky" ? typeHeader[0].HeaderLucky : null 
    )
}

export default headerUser;
