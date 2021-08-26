import { GET_IMAGES } from '../constants';

const imageReducer = (state = [], action) => {
    console.log(`Halló heimur er í State: ${state}`)
    switch(action.type){
        case GET_IMAGES: return action.payload
        default: return state
    }
}

export default imageReducer