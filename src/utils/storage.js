// 获取
export function getItem (key) {
  const res = window.localStorage.getItem(key)
  try {
    return JSON.parse(res)
  } catch (err) {
    console.log(err)
  }
}

// 设置
export function setItem (key, value) {
  if (typeof value === 'object') {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    window.localStorage.setItem(key, value)
  }
}

// 根据key删除本地存储中的其中一个
export function removeItem (key) {
  window.localStorage.removeItem(key)
}

// 删除所有的本地存储
export function clearItem () {
  window.localStorage.clearItem()
}
