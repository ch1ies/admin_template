import qs from 'qs'
// 配置请求拦截文件
import axios from 'axios'
async function getStudent () {
  let data =  await axios.get('/api/student')
  return data
}
// 登陆验证 
async function login ( params ) {
  let data = await axios.post('/api/admin', qs.stringify(params))
  return data
}

export const LoginApi = login
export const getStudentApi = getStudent