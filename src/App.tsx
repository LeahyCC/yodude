import { Router, Route } from 'wouter'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="App_Content">
        <Router>
          <Route path="/" component={Home} />
          <Route path="/about">About</Route>
        </Router>
      </div>
    </div>
  )
}

export default App
