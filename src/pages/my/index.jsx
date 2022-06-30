import React, { useState, useEffect } from 'react'
import { Fragment } from 'react';

import commonApi from '../../api/common';

export default function useIndex() {
  const [data, setData] = useState({})
  useEffect(() => {
    // Update the document title using the browser API
    const effect = async () => {
      await getMy()
    }
    effect().catch((e) => {console.log(e)})
  }, []); // 如果不传入第二个参数[]，useEffect会循环调用，因为其包含了componentDidUpdate
  const getMy = async () => {
    const res = await commonApi.getDriverBillStatistic()
    setData(res)
    console.log('data', data); // 空对象?????????????????????
  }
  return (
    <div>
      <div>haha</div>
      <div>{data.statInfo && data.statInfo[0].amount}</div>
      {data.statInfo && data.statInfo.map((v, k) => (<div key={k}>
        <div>{v.id}</div>
        <div>{v.amount}</div>
      </div>))}
    </div>
  )
}
