/**
 * 存储sessionStorage
 */
export const setStorage = (key, value, expire) => {
  if (!key) return
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  let content = {
    data: value,
    time: Date.now(),
    expire: expire || -1
  }
  window.sessionStorage.setItem(key, JSON.stringify(content))
}

/**
 * 获取sessionStorage
 */
export const getStorage = key => {
  if (!key) return
  let content = window.sessionStorage.getItem(key)
  if (!content) {
    return content
  }
  content = JSON.parse(content)
  if (content.expire > 0 && Date.now() - content.time > content.expire) {
    window.sessionStorage.removeItem(key)
    return null
  }
  return content.data
}

/**
 * 删除sessionStorage
 */
export const removeStorage = key => {
  if (!key) return
  window.sessionStorage.removeItem(key)
}

/**
 * 清空sessionStorage
 */
export const clearStorage = () => {
  window.sessionStorage.clear()
}

/**
 * 存储localStorage
 */
export const setLocalStorage = (key, value) => {
  if (!key) return
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, JSON.stringify(value))
}

/**
 * 获取localStorage
 */
export const getLocalStorage = (key) => {
  if (!key) return
  let content = window.localStorage.getItem(key)
  if (!content) {
    return content
  }
  content = JSON.parse(content)
  return content
}

/**
 * 删除localStorage
 */
export const removeLocalStorage = (key) => {
  if (!key) return
  window.localStorage.removeItem(key)
}

/**
 * 清空localStorage
 */
export const clearLocalStorage = () => {
  window.localStorage.clear()
}
