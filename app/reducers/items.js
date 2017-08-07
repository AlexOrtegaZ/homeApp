import { FETCH_ITEMS, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE } from '../constants'

var initialState = {
    items: [],
    isFeatching: false,
    lastFeatchDate: false,
    error: false
}

const items = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                isFeatching: true
            }
        case FETCH_ITEMS_SUCCESS: 
            return {
                ...state,
                items: action.items,
                isFeatching: false,
                lastFeatchDate: new Date().getTime()
            }
        case FETCH_ITEMS_FAILURE: 
            return {
                ...state,
                isFeatching: false,
                error: true
            }
        default:
            return state;
    }
}

export default items