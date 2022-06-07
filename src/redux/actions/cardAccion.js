export const addElementCard = (card) =>{
    return{
        type : 'naruto',
        peyload: card
    }
}

export const contadorNivel = (nivelUp) =>{
    return{
        type : 'nivel',
        peyload: nivelUp
    }
}

export const SignUpAction = (act) => {
    return{
        type: 'AcountUp',
        peyload:act
    }
}
export const SignInAction = (act) => {
    return{
        type: 'AcountSign',
        peyload:act
    }
}
export const AcountOnAction = (act)=>{
    return{
        type: 'onAcount',
        peyload:act
    }
}
export const exp = (act)=>{
    return{
        type: 'exp',
        peyload:act
    }
}
export const aumentarExp = (act)=>{
    return{
        type: 'expUp',
        peyload:act
    }
}
export const disminuirExp = (act)=>{
    return{
        type: 'expDown',
        peyload:act
    }
}
export const addToCard = (act)=>{
    return{
        type:'myCard',
        peyload:act
    }
}
export const reductionScrollNormal = (act)=>{
    return{
        type:'reductionScrollNormal',
        peyload:act
    }
}
export const increaseScroll = (act)=>{
    return{
        type:'increaseScroll',
        peyload:act
    }
}
export const reductionScrollAtributes = (act)=>{
    return{
        type:'reductionScrollAtributes',
        peyload:act
    }
}
export const increaseScrollAtributes = (act)=>{
    return{
        type:'increaseScrollAtributes',
        peyload:act
    }
}
export const GuarantedCard1 = (act)=>{
    return{
        type:'GuarantedCard1',
        peyload:act
    }
}
export const GuarantedCard2 = (act)=>{
    return{
        type:'GuarantedCard2',
        peyload:act
    }
}
export const GuarantedCard3 = (act)=>{
    return{
        type:'GuarantedCard3',
        peyload:act
    }
}
