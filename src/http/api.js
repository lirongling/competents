import service from './index'
// 所有接口的api封装
export default {
    // 获取用户信息
    getTable() {
        return service.get('mock/tableList')
    }
}