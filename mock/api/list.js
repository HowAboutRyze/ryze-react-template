/**
 * 可以是一个函数，参数 req, res 为 node http 服务对象
 * @param req res 为 node http 服务对象
 * @param req res 为 node http 服务对象
 * @returns {Object} JSON 格式
 * @example
 * - 返回 JSON 数据 http://127.0.0.1:8888/api/news/search
 * - 返回 源代码  http://127.0.0.1:8888/api/news/search.js 
 */
module.exports = function (req, res) {
  return {
    state: {
      code: 200,
      msg: 'success'
    },
    data: {
      list: [
        {
          id: Math.ceil(Math.random() * 10000),
          title: 'easywebpack 数据 Mock 服务'
        },
        {
          id: Math.ceil(Math.random() * 10000),
          title: '通过 easy build -d mock 方式启动 Mock 服务'
        }
      ]
    }
  }
}