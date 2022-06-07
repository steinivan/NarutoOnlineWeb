const INITIAL_STATE = {
    BaseDatos:[
    {name:"Ivan",password:"1ac"},
    {name:"Lautaro",password:"12ac"},
    {name:"Agustin",password:"123ac"},
    {name:"Patricio",password:"1234acADMIN",expP:0,card:[
        {name:"Kakashi Ero"}
    ]},
    ],
    card:[],
    nivel:1,
    // Acount:'NotUser',
    Acount:{name:"Patricio",password:"1234acADMIN",expP:0,
        card:[
            {name:"Kakashi Ero"},
            {name:"Hinata Chakra Kurama"},
            {name:"Ero Senin"},
        ],
        scrollNormal:12,
        scrollAtributes:10,
        GuarantedSSR1:{pos:0,src:null,name:null,position:null},
        GuarantedSSR2:{pos:1,src:null,name:null,position:null},
        GuarantedSR:{pos:2,src:null,name:null,position:null}
    },
    AcountOnline:false,
    Exp:0,
    levels:[
        {lvl:1,requireUp:500},
        {lvl:2,requireUp:2000},
        {lvl:3,requireUp:5000},
        {lvl:4,requireUp:12000},
        {lvl:5,requireUp:20000},
        {lvl:6,requireUp:30000},
        {lvl:7,requireUp:45000},
        {lvl:8,requireUp:50000},
        {lvl:9,requireUp:70000},
        {lvl:10,requireUp:75000},
    ],
    
}
let level = 1
export const cardReducer = (state= INITIAL_STATE ,action)=>{
    switch(action.type){
        case 'naruto':
            return{
                ...state,
                card:[...state.card,action.peyload]
            }
        case 'nivel':
            level += 1
            return {
                ...state,
                nivel:level,
            }
        case 'exp':
            return{
                ...state,
                Acount:{
                    ...state.Acount,
                        expP:action.peyload
                }
            }
        case 'expUp':
            return{
                ...state,
                Exp:state.Exp+action.peyload
            }
        case 'expDown':
            return{
                ...state,
                Exp:state.Exp - action.peyload
            }
        case 'AcountUp':
            return{
                ...state,
                BaseDatos:[...state.BaseDatos,action.peyload],
                Acount:action.peyload
            }
        case 'AcountSign':
            return{
                ...state,
                Acount:action.peyload
            }
        case 'onAcount':
            return{
                ...state,
                AcountOnline:action.peyload
            }
        case 'myCard':
            return{
                ...state,
                Acount:{
                    ...state.Acount,
                        card:[
                            ...state.Acount.card,{
                            name:action.peyload}
                        ]
                }
            }
        case 'reductionScrollNormal':
            return{
                ...state,
                Acount:{
                    ...state.Acount, 
                    scrollNormal :state.Acount.scrollNormal-action.peyload
                }
            }
        case 'reductionScrollAtributes':
            return{
                ...state,
                Acount:{
                    ...state.Acount, 
                    scrollAtributes :state.Acount.scrollNormal-action.peyload
                }
            }
        case 'GuarantedCard1':
            return{
                ...state,
                Acount:{
                    ...state.Acount, 
                    GuarantedSSR1:action.peyload
                }
            }
        case 'GuarantedCard2':
            return{
                ...state,
                Acount:{
                    ...state.Acount, 
                    GuarantedSSR2:action.peyload
                    
                }
            }
        case 'GuarantedCard3':
            return{
                ...state,
                Acount:{
                    ...state.Acount, 
                    GuarantedSR:action.peyload
                }
            }
            default:
                return state;
            };
}