import { createStore } from "redux";
import countReducer from "./count_reducer";
import todosReducer from "./todos_reducer";

//createStore 只能调用一次
export default createStore(countReducer, todosReducer);
