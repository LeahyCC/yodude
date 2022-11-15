import { Route } from 'wouter'
import './navigation.scss'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Route path="/">Home</Route>
        </li>
        <li>
          <Route path="/about">About</Route>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
