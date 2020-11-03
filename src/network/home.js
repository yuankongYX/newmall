import { request } from "./network"

export function getHomeMuliData() {
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url: '/home/data',
    params: {
      type,page
    }
  })
}