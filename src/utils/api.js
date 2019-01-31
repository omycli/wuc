import request from './request'
import { platform } from './index'

const baseUrlApi = platform === 'h5' ? '/api' : 'https://api.ithome.com'

const api = {
  getLogin: (r) => request.get('/api/login/index', null, {
    baseURL: baseUrlApi
  })
}

export default api
