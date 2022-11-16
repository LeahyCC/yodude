import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import About from './components/About/About'
import * as style from './app.styles'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize())
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  const handleNavToggle = () => {
    setIsNavOpen((state) => !state)
  }

  const heightContainer = (children: React.ReactNode, id: string) => {
    return (
      <div id={id} className={style.App__heightContainer(windowSize)}>
        {children}
      </div>
    )
  }

  return (
    <div className={style.App}>
      <Navigation isNavOpen={isNavOpen} setIsNavOpen={handleNavToggle} />
      <div className={style.App__content(isNavOpen)}>
        {heightContainer(<Home />, 'Home')}
        {heightContainer(<About />, 'About')}
      </div>
    </div>
  )
}

export default App

const getWindowSize = () => {
  const { innerWidth: w, innerHeight: h } = window
  return { w, h }
}
