import { connect } from 'react-redux'
import { fetchItems } from '../../actions'

import DoShopList from './DoShopList'

mapStateToProps = (state, ownProps) => {
    return {
        items: state.items.items,
        isLoading: state.items.isFeatching,
        error: state.items.error
    }
}

mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getItems: () => { dispatch(fetchItems()) }
    }
}

const DoShopListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DoShopList)

export default DoShopListContainer