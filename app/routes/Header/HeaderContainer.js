import { connect } from 'react-redux'
import { showModal, testFirebaseRequest } from '../../actions'
import Header from './Header'

mapStateToProps = (state, ownProps) => {
    return {
        title: state.selectedTab.name,
        isModalOpen: state.selectedTab.isModalOpen
    }
}

mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showModal: (show) => {
            dispatch(showModal(show))
        },
        testFb: () => {
            dispatch(testFirebaseRequest())
        },
    }
}

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

export default HeaderContainer