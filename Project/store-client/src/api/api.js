
import axios from 'axios'


const API = 'http://localhost:3000'

// Product Endpoints

const getProducts = () => axios.get(`${API}/products/all`)


// Order Endpoints
const getOrders = () => axios.get(`${API}/orders/all`)


// User Endpoints
const getUsers = () => axios.get(`${API}/users/all`)

export { getProducts, getOrders , getUsers }