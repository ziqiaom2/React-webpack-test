import countReducer from './reducers/count'
import personReducer from './reducers/person'
import { combineReducers } from 'redux'

// combineReducers传入的对象就是redux保存的总状态对象
export default const allReducer = combineReducers({
	countReducer:countReducer,
	personReducer:personReducer
})