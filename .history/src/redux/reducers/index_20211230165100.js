import { combineReducers } from 'redux'


import countReducer from './reducers/count'
import personReducer from './reducers/person'


// combineReducers传入的对象就是redux保存的总状态对象
const allReducer = combineReducers({
	countReducer:countReducer,
	personReducer:personReducer
})

export default allReducer