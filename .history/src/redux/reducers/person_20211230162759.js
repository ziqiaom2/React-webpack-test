import { ADD_PERSON } from '../constant'
// reducer需要保持纯函数
const initState =[
  {id:'001',name:'tom',age:18}
]

export default function personReducer (preState = initState,action){
  const {type,data} = action
  switch (type){
    case ADD_PERSON:
      // 此处进行了浅比较，不能直接操作preState，再返回新的preState
      return [data,...preState]
    default:
      return preState
  }
}