import { FC, useContext } from 'react'
import useInterval from './useInterval'
import useUpdate from './useUpdate'
import dayjs from 'dayjs'
import ThemeContext from '../../providers/theme'
import cls from 'classnames'
import './index.scss'

type ClockProps = {}

const Clock: FC<ClockProps> = () => {
  const update = useUpdate()
  const { mode } = useContext(ThemeContext)

  useInterval(() => {
    update()
  }, 2000)

  const now = dayjs()
  const hour = now.hour()
  const minute = now.minute()
  const dateStr = now.format('MM月DD日')
  const weekStr = weekdayCh(now.day() as any)

  return (
    <div className={cls('clock', mode === 'dark' && 'dark')}>
      <div className="hour-minute">
        <span>{formatNumber(hour)}</span>
        <span>:</span>
        <span>{formatNumber(minute)}</span>
      </div>
      <div className="week-date">
        <div>{dateStr}</div>
        <div>{weekStr}</div>
      </div>
    </div>
  )
}

const formatNumber = (num: number) => {
  if (num < 10) {
    return `0${num}`
  }
  return `${num}`
}

const weekdayCh = (num: 0 | 1 | 2 | 3 | 4 | 5 | 6) => {
  const mapping = {
    0: '星期日',
    1: '星期一',
    2: '星期二',
    3: '星期三',
    4: '星期四',
    5: '星期五',
    6: '星期六',
  }
  return mapping[num]
}

export default Clock
