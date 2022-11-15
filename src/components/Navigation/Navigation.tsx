import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import * as style from './navigation.styles'
import rocket from './rocket.png'

const Navigation = () => {
  const [isFlying, setIsFlying] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlying(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [isFlying])

  return (
    <nav className={style.Nav}>
      <div>
        <img
          onClick={() => setIsFlying(true)}
          className={style.Rocket(isFlying)}
          src={rocket}
          alt="rocket"
        />
      </div>
      <ul>
        <li className={style.NavItem}>
          <Link className={style.NavLink} to="/">
            Home
          </Link>
        </li>
        <li className={style.NavItem}>
          <Link className={style.NavLink} to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
