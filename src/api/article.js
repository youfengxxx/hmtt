import request from '@/utils/request'

export const getArticle = (article_id) => {
  return request({
    url: `/articles/${article_id}`
  })
}

/**
 *
 * @param {已用户id} target
 * @returns
 */
export const addUser = (target) => {
  return request({
    method: 'POST',
    url: '/user/followings',
    data: {
      target
    }
  })
}

/**
 *
 * @param {用户id} target
 * @returns
 */
export const delUser = (target) => {
  return request({
    method: 'DELETE',
    url: `/user/followings/${target}`
  })
}

/**
 *
 * @param {收藏的目标文件} target
 * @returns
 */
export const addCollect = (target) => {
  return request({
    method: 'POST',
    url: '/article/collections',
    data: {
      target
    }
  })
}

/**
 *
 * @param {收藏目标文章的id} target
 * @returns
 */
export const delCollect = (target) => {
  return request({
    method: 'DELETE',
    url: `/article/collections/${target}`
  })
}
