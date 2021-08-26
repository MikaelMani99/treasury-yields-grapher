import { GET_YIELDS_DAY } from '../constants';

const yieldsDayReducer = (state = {}, action) => {
    switch(action.type){
        case GET_YIELDS_DAY: return action.payload
        default: return state
    }
}

export default yieldsDayReducer