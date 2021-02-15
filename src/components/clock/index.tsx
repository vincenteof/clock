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

  return (
    <div className={cls('clock', mode === 'light' && 'light')}>
      <span>{formatNumber(hour)}</span>
      <span>:</span>
      <span>{formatNumber(minute)}</span>
    </div>
  )
}

const formatNumber = (num: number) => {
  if (num < 10) {
    return `0${num}`
  }
  return `${num}`
}

export default Clock
