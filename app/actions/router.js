import { SELECT_TAB, SHOW_MODAL } from '../constants'

export const selectTab = tab => {
    return {
        type: SELECT_TAB,
        name: tab.name,
        key: tab.key,
        isModalOpen: tab.isModalOpen,
    }
}

export const showModal = show => {
    return {
        type: SHOW_MODAL,
        show: show
    }
}