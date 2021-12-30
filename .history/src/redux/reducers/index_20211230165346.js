// 用于汇总需要的reducers

import { combineReducers } from 'redux'


import countReducer from './count'
import personReducer from './person'


// combineReducers传入的对象就是redux保存的总状态对象
export default  combineReducers({
	countReducer:countReducer,
	personReducer:personReducer
})

