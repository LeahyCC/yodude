import React, { useState } from 'react'
import InnerPageContainer from './components/InnerPageContainer/InnerPageContainer'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import About from './components/About/About'
import * as style from './app.styles'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleNavToggle = () => {
    setIsNavOpen((state) => !state)
  }

  return (
    <div className={style.App}>
      <Navigation isNavOpen={isNavOpen} setIsNavOpen={handleNavToggle} />
      <div className={style.App__content(isNavOpen)}>
        <InnerPageContainer id="home">
          <Home />
        </InnerPageContainer>
        <InnerPageContainer id="about">
          <About />
        </InnerPageContainer>
        <InnerPageContainer id="projects">
          <div>Projects</div>
        </InnerPageContainer>
        <InnerPageContainer id="resume">
          <div>Resume</div>
        </InnerPageContainer>
      </div>
    </div>
  )
}

export default App
