import { defineStore } from 'pinia'
import axios from 'axios'
import api from '@/helpers/api.js'
import readFile from '@/helpers/file-reader.js'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    authToken: null
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
    getUser: (state) => state.user,
    getAuthToken: (state) => {
      if (!state.authToken) {
        state.authToken = localStorage.getItem('authToken')
      }
      return state.authToken
    }
  },
  actions: {
    setUser(user) {
      this.user = user
    },
    clearUser() {
      this.user = null
    },
    setAuthToken(token) {
      this.authToken = token
      localStorage.setItem('authToken', this.authToken)
    },
    clearAuthToken() {
      this.authToken = null
      localStorage.removeItem('authToken')
    },
    async fetchUser() {
      try {
        const user = await api.get('/user')
        this.setUser(user)
      } catch (e) {
        this.clearUser()
      }
    },
    async login(email, password) {
      const response = await api.post('/login', {
        email: email,
        password: password
      })

      if (response.status === 200) {
        this.setAuthToken(response.data.token)
        this.setUser(response.data.user)
        window.location.href = '/'
      } else {
        window.location.href = '/login'
      }
    },
    async logout() {
      await axios.post('/api/logout')
      this.clearUser()
      this.clearAuthToken()
    },
    async register(user) {
      const data = {
        email: user.email,
        password: user.password,
        name: user.name
      }
      const image = await readFile(user.image)
      data['image'] = image

      try {
        const response = await api.post('/register', data)
        if (response.status === 200) {
          this.setUser(response.data.user)
          this.setAuthToken(response.data.token)
          document.location.href = '/'
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
})
