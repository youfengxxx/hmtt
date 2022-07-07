import request from '@/utils/request'

/**
 *
 * @param type 评论类型，a-对文章(article)的评论，c-对评论(comment)的回复
 * @param source 源id，文章id或评论id
 * @param offset 获取评论数据的偏移量，值为评论id，表示从此id的数据向后取，不传表示从第一页开始读取数据
 * @param limit 获取的评论数据个数，不传表示采用后端服务设定的默认每页数据量
 *
 * @returns
 */
export const getCommentList = ({ type, source, offset, limit }) => {
  return request({
    url: 'comments',
    params: {
      type, source, offset, limit
    }
  })
}

/**
 *
 * @param {对评论或评论回复点赞} target
 * @returns
 */
export const addLike = (target) => {
  return request({
    method: 'POST',
    url: 'comment/likings',
    data: {
      target
    }
  })
}

/**
 *
 * @param {要取消点赞的评论id或评论回复id} target
 * @returns
 */
export const delLike = (target) => {
  return request({
    method: 'DELETE',
    url: `comment/likings/${target}t`
  })
}

/**
 *target 文章的id或者评论的id
 content 内容
 art_id? 文章的id  对评论内容发表回复时，需要传递此参数，表明所属文章的id 对文章进行评论，不要传递此参数
 * @param {*} data
 * @returns
 */
export const addComment = (data) => {
  return request({
    method: 'POST',
    url: 'comments',
    data
  })
}
