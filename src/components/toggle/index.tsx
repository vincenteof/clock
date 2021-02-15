import { useContext } from 'react'
import ReactToggle from 'react-toggle'
import ThemeContext from '../../providers/theme'
import 'react-toggle/style.css'

const Toggle = () => {
  const { setMode, mode } = useContext(ThemeContext)
  return (
    <ReactToggle
      icons={false}
      checked={mode === 'light'}
      onChange={(e) => setMode?.(e.currentTarget.checked ? 'light' : 'dark')}
    />
  )
}

export default Toggle
