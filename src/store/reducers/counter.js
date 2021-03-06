import * as actionType from '../Action'

const initialState = {
    counter: 0,
  
}

const reducer = (state = initialState, action)=>{
    
    switch ( action.type ) {
        case actionType.INCREMENT:
          
            return {
                ...state,
                counter:state.counter+1

            }
        case actionType.DECREMENT:
                return {
                    ...state,
                    counter:state.counter-1
                }    

        case actionType.ADD:
            return {
                ...state,
                counter:state.counter+action.value
            }
        case actionType.SUB:    
            return {
                ...state,
                counter:state.counter-action.value
            }

        default:
            return state    
              
    }     

}

export default reducer

