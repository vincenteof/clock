import React, { useState } from 'react'
import Clock from './components/clock'
import Toggle from './components/toggle'
import ThemeContext, { Mode } from './providers/theme'
import cls from 'classnames'
import './App.scss'

function App() {
  const [mode, setMode] = useState<Mode>('dark')
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <div className={cls('App', mode === 'light' && 'light')}>
        <header className="header">
          <Toggle />
        </header>
        <main>
          <Clock />
        </main>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
