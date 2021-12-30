import { createStore  } from 'redux'
import countReducer from './count_reducer'
import todosReducer from './todos_reducer'

export  createStore(countReducer)
export  createStore(todosReducer)