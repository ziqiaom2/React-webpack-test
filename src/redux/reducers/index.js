// 用于汇总需要的reducers 并暴露出去

import { combineReducers } from 'redux'


import count from './count'
import person from './person'


// combineReducers传入的对象就是redux保存的总状态对象
export default  combineReducers({
	count,
	person
})

