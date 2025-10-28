import axios from 'axios'

const client = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
})

client.interceptors.response.use(
  (response) => response,
  (error) => {
    const normalizedError = error?.response?.data || {
      message: 'Unexpected error, please try again later.',
    }

    return Promise.reject(normalizedError)
  },
)

export default client

