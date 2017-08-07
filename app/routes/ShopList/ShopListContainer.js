import { connect } from 'react-redux'
import { showModal } from '../../actions'

import ShopList from './ShopList'

mapStateToProps = (state, ownProps) => {
    return {
        isModalOpen: state.selectedTab.isModalOpen
    }
}

mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showModal: (show) => {
            dispatch(showModal(show))
        }
    }
}

const ShopListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopList)

export default ShopListContainer