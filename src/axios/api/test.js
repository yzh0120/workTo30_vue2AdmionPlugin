import {
    get,
    post
} from '@/axios/request.js'

export function twoHundred(data, other) {
    return post('/test/twoHundred', data, other)
  }
  
  export function notTwoHundred(data, other) {
    return post('/test/notTwoHundred', data, other)
  }
  
  export function loading(data, other) {
    return post('/test/loading', data, other)
  }
  
  export function socket(data, other) {
    return get('/socket', data, other)
  }

export function tablePager(data, other) {
    return post('/test/tablePager', data, other)
}