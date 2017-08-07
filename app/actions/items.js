import { 
    FETCH_ITEMS, 
    FETCH_ITEMS_SUCCESS, 
    FETCH_ITEMS_FAILURE, 
    ADD_ITEM 
} from '../constants'

import { itemsRef  } from '../config/firebase' 

export function fetchItems() {
    return (dispatch) => {
        dispatch(getItems())
        itemsRef.on('value', (snapshot) => {
            dispatch(getItemsSuccess(snapshot.val()))
        })
    }
}

function getItems() {
    return {
        type: FETCH_ITEMS
    }
}

function getItemsSuccess(items) {
    return {
        type: FETCH_ITEMS_SUCCESS,
        items: Object.keys(items).map(key =>{
            return {
                $id: key,
                ...items[key]
            }
        }),
    }
}

function getItemsFailure() {
    return {
        type: FETCH_ITEMS_FAILURE
    }
}

export function addNewItem (newItem){
    itemsRef.push(newItem);
    return {
        type: ADD_ITEM
    }
}
