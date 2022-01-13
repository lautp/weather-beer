import {
    GET_WEATHER,
    GET_DAY,
    GET_ID,
    GET_TEMP,
    GET_BEER,
    GET_QUANTITY,
    GET_DUBBEL,
    GET_NEIPA,
    GET_GOLDEN,
    GET_SCOTCH

} from '../types'

export default (state,action) => {
    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                weather:action.payload
            }
        case GET_DAY:
            return {
                ...state,
                day:action.payload
            }
        case GET_ID:
            return {
                ...state,
                id:action.payload
            }
        case GET_TEMP:
            return {
                ...state,
                tmpt:action.payload
            }
        case GET_BEER:
            return {
                ...state,
                beer:action.payload
            }
        case GET_QUANTITY:
            return {
                ...state,
                quantity:action.payload
            }
        case GET_DUBBEL:
            return {
                ...state,
                dubbel:action.payload
            }
        case GET_NEIPA:
            return {
                ...state,
                neipa:action.payload
            }
        case GET_GOLDEN:
            return {
                ...state,
                golden:action.payload
            }
        case GET_SCOTCH:
            return {
                ...state,
                scotch:action.payload
            }
        
        default:
            return state;
    }
}