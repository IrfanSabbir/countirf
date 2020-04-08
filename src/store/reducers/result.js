import * as actionType from '../Action'

const initialState = {
    result:[],
}

const reducer = (state = initialState, action)=>{
    
    switch ( action.type ) {
       
        case actionType.RESULT:    
            return {
                ...state,
                result:state.result.concat({id:new Date(), value:action.result})
            }      
        case actionType.DELETE:   
            return {
                ...state,
                result:state.result.filter(obj =>obj.id !== action.id )
            } 
            default:
            return state                 
    }     
 
}

export default reducer

