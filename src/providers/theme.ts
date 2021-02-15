import { createContext } from 'react'

export type Mode = 'dark' | 'light'
type IThemeContext = {
  mode: Mode
  setMode?: (mode: Mode) => void
}

export default createContext<IThemeContext>({
  mode: 'dark',
})
