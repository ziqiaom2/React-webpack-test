import React, { Component } from "react";

//引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/count";

//引入connect用于连接UI组件与redux
import { connect } from "react-redux";

/* 
	1.mapStateToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapStateToProps用于传递状态
*/

/* 
	1.mapDispatchToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapDispatchToProps用于传递操作状态的方法
*/
// function mapDispatchToProps(dispatch) {
//   return {
//     jia: (number) => dispatch(createIncrementAction(number)),
//     jian: (number) => dispatch(createDecrementAction(number)),
//     jiaAsync: (number, time) =>
//       dispatch(createIncrementAsyncAction(number, time)),
//   };
// }

//使用connect()()创建并暴露一个Count的容器组件
// 简写形式，不需要自己去dispatch，redux会自动分发

// 容器组件与ui组件合并
class Count extends Component {
  state = { carName: "奔驰c63" };

  //加法
  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(value * 1);
  };
  //减法
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(value * 1);
  };
  //奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.jia(value * 1);
    }
  };
  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.jiaAsync(value * 1, 500);
  };

  render() {
    //console.log('UI组件接收到的props是',this.props);
    return (
      <div>
				<h1>Count</h1>
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}

export default connect((state) => ({ count: state }), {
  jia: createIncrementAction,
  jian: createDecrementAction,
  jiaAsync: createIncrementAsyncAction,
})(Count);
