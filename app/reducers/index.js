import { combineReducers } from 'redux'
import router from './router'
import items from './items'

const rootReducer = combineReducers({
  selectedTab: router,
  items
})
export default rootReducer