import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const formatDate = (date: string) => {
  return dayjs(date, 'YYYY-MM-DD HH:mm:ss').format('MMMM D, YYYY')
}

export const formatRelativeTime = (date: string) => {
  return dayjs(date, 'YYYY-MM-DD HH:mm:ss').fromNow()
}
