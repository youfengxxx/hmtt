// 把时间变成相对时间
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

export const dateformat = (time) => {
  return dayjs(time).fromNow()
}
