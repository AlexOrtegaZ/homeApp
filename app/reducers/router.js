import { SELECT_TAB, SHOW_MODAL, TEST_REQUEST } from '../constants'

const initialState = {
     name: 'Perfil',
     key: 'profile'
}

const selectedTab = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_TAB:
            return {
                ...state,
                name: action.name ? action.name : state.name,
                key: action.key ? action.key : state.key,
                isModalOpen: action.isModalOpen,    
            }
        case SHOW_MODAL: 
            return {
                ...state,
                isModalOpen: action.show,
            }
        case TEST_REQUEST:
        default:
            return state;
    }
}

export default selectedTab;