import React, { Component } from 'react'
import commonApi from '../../api/common'

export default class MyClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      text: '',
    }
  }
  async componentDidMount() {
    await this.getMy()
  }
  getMy = async () => {
    const res = await commonApi.getDriverBillStatistic()
    this.setState({data: res})
    console.log('data', this.state.data); // 空对象?????????????????????
  }
  changeInput = (e) => { this.setState({text: e.target.value}) }
  render() {
    const { data, text } = this.state
    const length = data.statInfo && data.statInfo.length
    console.log('length', length);
    return (
      <div>
        <div>MyClass</div>
        <div>{length && data.statInfo[0].amount}</div>
        {data.statInfo && data.statInfo.map((v, k) => (
        <div key={k}>
          <div>{v.id}</div>
          <div>{v.amount}</div>
        </div>))}
        <input value={text} onChange={this.changeInput} />
        <div>{text}</div>
      </div>
    )
  }
}
