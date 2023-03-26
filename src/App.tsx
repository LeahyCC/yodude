import { useState } from 'react'
import { Route } from 'wouter'
import InnerPageContainer from './components/InnerPageContainer/InnerPageContainer'
import Navigation from './components/Navigation/Navigation'
import About from './pages/about/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import * as style from './app.styles'

// Project Pages
import { GraphQL } from './projects/GraphQL'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const IS_NAV_OPEN = true

function App() {
  const queryClient = new QueryClient()
  const [isNavOpen, setIsNavOpen] = useState(IS_NAV_OPEN)
  const [containerScrollValues, setContainerScrollValues] = useState({
    home: 0,
    about: 0,
    projects: 0,
    contact: 0,
  })

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
    <div css={style.App}>
      <Route path="/">
        <Navigation
          isNavOpen={isNavOpen}
          setIsNavOpen={handleNavToggle}
          containerScrollValues={containerScrollValues}
        />
        <div css={style.App__content(isNavOpen)}>
          <InnerPageContainer id="home" setValue={handleSetValue}>
            <Home />
          </InnerPageContainer>
          <InnerPageContainer id="about" setValue={handleSetValue}>
            <About />
          </InnerPageContainer>
          <InnerPageContainer id="projects" setValue={handleSetValue}>
            <Projects />
          </InnerPageContainer>
          <InnerPageContainer id="contact" setValue={handleSetValue}>
            <Contact />
          </InnerPageContainer>
        </div>
      </Route>
      <QueryClientProvider client={queryClient}>
        <Route path="/project/graphql" component={GraphQL} />
      </QueryClientProvider>
    </div>
  )
}

export default App
