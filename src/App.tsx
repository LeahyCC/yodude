import { useState } from 'react'
import { Route, Link } from 'wouter'
import InnerPageContainer from './components/InnerPageContainer/InnerPageContainer'
import Navigation from './components/Navigation/Navigation'
import Home from './Pages/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import * as style from './app.styles'

// Project Pages
import { GraphQL } from './projects/GraphQL/GraphQL'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const IS_NAV_OPEN = true

const HelloWorld = () => (
  <div>
    Hello World{' '}
    <a onClick={() => history.back()} className="link">
      Home
    </a>
  </div>
)
const HelloWorld2 = () => (
  <div>
    Hello World 2{' '}
    <a onClick={() => history.back()} className="link">
      Home
    </a>
  </div>
)
const HelloWorld3 = () => (
  <div>
    Hello World 3{' '}
    <a onClick={() => history.back()} className="link">
      Home
    </a>
  </div>
)
const HelloWorld4 = () => (
  <div>
    Hello World 4{' '}
    <a onClick={() => history.back()} className="link">
      Home
    </a>
  </div>
)

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
