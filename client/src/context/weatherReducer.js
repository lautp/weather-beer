import {
    GET_WEATHER,
    GET_DAY,
    GET_TEMP,
    GET_BEER,
    GET_QUANTITY,
    ORDER_BEER,
    ORDER_ERROR,
    ORDER_DELETE,
    GET_BIRRA,
    GET_CANT

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
        case ORDER_BEER:
            return {
                ...state,
                beer: action.payload
            }
        case ORDER_ERROR:
            return {
                ...state,
                payload:action.payload
            }
        case ORDER_DELETE:
            return {
                ...state,
                
            }
        case GET_BIRRA:
            return {
                ...state,
                birra: action.payload
            }
        case GET_CANT:
            return {
                ...state,
                cant: action.payload
            }
        default:
            return state;
    }
}