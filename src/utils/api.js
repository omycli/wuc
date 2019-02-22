import request from './request'
import { platform } from './index'

const baseUrlApi = platform === 'h5' ? '/api' : ''

const api = {
  getLogin: (r) => request.get('/api/login/index', null, {
    baseURL: baseUrlApi
  })
}

export default api
