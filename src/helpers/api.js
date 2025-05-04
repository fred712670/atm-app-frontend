import axios from 'axios'

const api = axios.create({
  baseURL: 'http://' + import.meta.env.VITE_HOST + '/api',
  headers: {
    'Content-Type': 'application/json'
  }
})
api.interceptors.request.use(async (config) => {
  const { useUserStore } = await import('@/stores/user')
  const userStore = useUserStore()
  const token = userStore.getAuthToken
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
