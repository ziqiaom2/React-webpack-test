import axios from 'axios';
const MY_SERVER = 'http://172.17.157.73:8080/my'
export default {
  myGet() {
    axios.get(MY_SERVER).then((res) => {
      console.log('res', res);
    }).catch((e) => {
      console.log('e', e);
    });
  },
  // driver.bill.statistic(车主流水页金额聚合)
  getDriverBillStatistic(params) {
    return axios.post(MY_SERVER,
      {
        action: 'driver.bill.statistic',
        ...params,
      }).then((res) => {
      console.log('getDriverBillStatistic-res', res);
      return res.data;
    }).catch((e) => {
      console.log('getDriverBillStatistic-e', e);
    });
  },
  // taxi.static.configInfo(哈啰打车前端静态配置)
  getConfigInfo(params) {
    return axios.post(MY_SERVER,
      {
        action: 'taxi.static.configInfo',
        ...params,
      }).then((res) => {
      console.log('getConfigInfo-res', res);
      return res.data;
    }).catch((e) => {
      console.log('getConfigInfo-e', e);
    });
  },
};

// 用于前端文件导入request.js
// /Users/hb20981/express-node/my-test/request-fe.js
// import test from '/Users/hb20981/express-node/my-test/request-fe.js';