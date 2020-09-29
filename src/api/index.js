import axios from 'axios'
const MARKET_API = 'https://fakestoreapi.com/'

const creatAxios = axios.create({
  baseURL: MARKET_API,
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
})

export const getMarketData = async options => {
  const option = [].concat(options) || {}
  return await creatAxios.get('products', option)
}
