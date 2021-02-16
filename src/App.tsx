import React, { useState } from 'react'
import Clock from './components/clock'
import Switch from './components/switch'
import ThemeContext, { Mode } from './providers/theme'
import cls from 'classnames'
import './App.scss'

function App() {
  const [mode, setMode] = useState<Mode>('light')
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <div className={cls('App', mode === 'dark' && 'dark')}>
        <header className="header">
          <Switch />
        </header>
        <main>
          <Clock />
        </main>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
