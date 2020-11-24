import axios from 'axios'

const API = axios.create({
  baseURL: 'https://bear-burger-builder.firebaseio.com/'
})

export {
  API
}