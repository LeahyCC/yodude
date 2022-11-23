import { useEffect, useState } from 'react'
import useGetWindowSize from './hooks/useGetWindowSize'
import InnerPageContainer from './components/InnerPageContainer/InnerPageContainer'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import * as style from './app.styles'

function App() {
  const windowSize = useGetWindowSize()
  const [isNavOpen, setIsNavOpen] = useState(windowSize.w <= 1600)
  const [containerScrollValues, setContainerScrollValues] = useState({
    home: 0,
    about: 0,
    contact: 0,
  })

  useEffect(() => {
    windowSize.w >= 1400 && !isNavOpen && setIsNavOpen(true)
    windowSize.w <= 1400 && isNavOpen && setIsNavOpen(false)
  }, [windowSize.w])

  const handleNavToggle = () => {
    setIsNavOpen((state) => !state)
  }

  const handleSetValue = (value: number, id: string) => {
    setContainerScrollValues((state) => ({
      ...state,
      [id]: value,
    }))
  }

  return (
    <div className={style.App}>
      <Navigation
        isNavOpen={isNavOpen}
        setIsNavOpen={handleNavToggle}
        containerScrollValues={containerScrollValues}
      />
      <div className={style.App__content(isNavOpen)}>
        <InnerPageContainer id="home" setValue={handleSetValue}>
          <Home />
        </InnerPageContainer>
        <InnerPageContainer id="about" setValue={handleSetValue}>
          <About />
        </InnerPageContainer>
        <InnerPageContainer id="contact" setValue={handleSetValue}>
          <Contact />
        </InnerPageContainer>
      </div>
    </div>
  )
}

export default App
