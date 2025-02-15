/*
 * @Author: abc-0886kAX-code
 * @Date: 2021-06-08 16:41:06
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-07-26 13:29:41
 * @Description: file content
 */
/**
 *localStorage标准封装
 */
const Storage = {
  // 存储
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  // 取出数据
  get(key) {
    try {
      const value = localStorage.getItem(key)
      if (value === null || value === undefined || value === '') {
        return null
      }
      return JSON.parse(localStorage.getItem(key))
    }
    catch {
      return null
    }
  },
  // 删除数据
  remove(key) {
    localStorage.removeItem(key)
  },
}
/**
 *sessionStorage标准封装
 */
const Session = {
  // 存储
  set(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  },
  // 取出数据
  get(key) {
    try {
      const value = sessionStorage.getItem(key)
      if (value === null || value === undefined || value === '') {
        return null
      }
      return JSON.parse(sessionStorage.getItem(key))
    }
    catch {
      return null
    }
  },
  // 删除数据
  remove(key) {
    sessionStorage.removeItem(key)
  },
}

/**
 *localstorage定时缓存封装，设置缓存时如果没有设置时间,单位分钟，默认60分钟
 */
const tempStorage = {
  // 存储
  set(key, value, time) {
    try {
      if (!localStorage) {
        return null
      }
      // 如果没有设置时间或者为NaN,则设置默认时间为24小时
      if (!time || Number.isNaN(time)) {
        time = 60
      }
      // 过期时间的毫秒数
      const endTime = (new Date()).getTime() + time * 60 * 1000
      // 将时间和值一起存储
      localStorage.setItem(key, JSON.stringify({ data: value, time: endTime }))
    }
    catch {
      return null
    }
  },
  // 取出数据
  get(key) {
    try {
      if (!localStorage || !localStorage.getItem(key)) {
        return null
      }
      // 获取缓存数据
      const result = JSON.parse(localStorage.getItem(key))
      // 目前时间的毫秒数
      const now = (new Date()).getTime()
      // 如果缓存时间过期则移除数据
      if (now > result.time) {
        this.remove(key)
        return null
      }
      return result.data
    }
    catch {
      this.remove(key)
      return null
    }
  },
  // 删除数据
  remove(key) {
    localStorage.removeItem(key)
  },

}

export {
  Storage,
  Session,
  tempStorage,
}
