import { connect } from 'react-redux'
import { selectTab } from '../../actions'
import TabBar from './TabBar'

const mapStateToProps = (state, ownProps) => {
    return {
        selectedTab: state.selectedTab
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectTab: (tab) => {
            dispatch(selectTab(tab))
        }
    }
}
const TabBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TabBar);

export default TabBarContainer;