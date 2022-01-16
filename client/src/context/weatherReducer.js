import {
    GET_WEATHER,
    GET_DAY,
    GET_TEMP,
    GET_BEER,
    GET_QUANTITY,
    ORDER_BEER,
    ORDER_ERROR,
    ORDER_DELETE,
    SET_ORDER,
    ORDER_UPDATE,
    FILTER_ORDER,
    GET_BIRRA,
    GET_CANT,
    GET_ORDER,
    SET_CURRENT,
    CLEAR_CURRENT,
    GET_ID

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
                orders: state.orders.filter(contact => contact.id !== action.payload)
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
        case GET_ORDER:
            return {
                ...state,
                orders: action.payload
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current:{}
            }
        case GET_ID:
            return {
                ...state,
                id:action.payload
            }
        default:
            return state;
    }
}