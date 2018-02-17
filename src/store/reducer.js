import * as actionTypes from './actions'


const initialState = {
  flowers : []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
      case actionTypes.LOAD_FLOWER_LIST:
      return {
        ...state,
        flowers : action.flowers
      }
    }

    return state 
}





export default reducer
