import request from './request'
import { platform } from './index'

const baseUrlApi = platform === 'h5' ? '/api' : '/h5'

const api = {
  getLogin: (r) => request.get('/api/login/index', r, {
    baseURL: baseUrlApi
  })
}

export default api
