/* 
	该文件专门用于暴露一个store对象，整个应用只有./reducers/count_reducer
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware, combineReducers} from 'redux'
//引入为Count组件服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
//引入redux-thunk，用于支持异步action,否则报错，说你的action不是一个plain object
import thunk from 'redux-thunk'


const allReducer = combineReducers({
	count:countReducer,
	person:personReducer
})
//暴露store
export default createStore(allReducer,applyMiddleware(thunk))