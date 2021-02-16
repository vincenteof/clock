import { useContext } from 'react'
import ThemeContext from '../../providers/theme'
import RcSwitch from 'rc-switch'
import './index.scss'

const Switch = () => {
  const { setMode, mode } = useContext(ThemeContext)
  return (
    <RcSwitch
      prefixCls="clock-theme-switch"
      checked={mode === 'dark'}
      onChange={(checked) => setMode?.(checked ? 'dark' : 'light')}
      checkedChildren="🌜"
      unCheckedChildren="🌞"
    />
  )
}

export default Switch
