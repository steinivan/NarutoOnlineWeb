const INITIAL_STATE = {
    card:[],
}

export const cardReducer = (state= INITIAL_STATE ,action)=>{
    switch(action.type){
        case 'naruto':
            return{
                ...state,
            }
            default:
                return state;
            };
}