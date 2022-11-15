import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import classNames from 'classNames'
import * as style from './navigation.styles'
import rocket from './rocket.png'

import { BiArrowFromLeft } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'
import { FaInfo } from 'react-icons/fa'
import { BiGitBranch } from 'react-icons/bi'
import { CgFileDocument } from 'react-icons/cg'

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [location] = useLocation()

  const navLinks = [
    {
      name: 'Home',
      path: '/',
      icon: <AiOutlineHome />,
    },
    {
      name: 'About',
      path: '/about',
      icon: <FaInfo />,
    },
    {
      name: 'Projects',
      path: '/projects',
      icon: <BiGitBranch />,
    },
    {
      name: 'Resume',
      path: '/resume',
      icon: <CgFileDocument />,
    },
  ]

  return (
    <nav
      className={classNames(style.Nav, {
        [style.NavOpen]: isNavOpen,
      })}
    >
      <button
        onClick={() => setIsNavOpen((state) => !state)}
        className={classNames(style.CloseButton, {
          [style.CloseButtonActive]: isNavOpen,
        })}
      >
        <BiArrowFromLeft size={24} />
      </button>
      <ul className={style.NavContainer}>
        {navLinks.map((item) => {
          const className = classNames(style.NavItem, {
            [style.NavItemActive]: location === item.path,
          })
          return (
            <li className={className} key={item.name}>
              <Link to={item.path}>
                <a className={style.NavLink}>
                  {isNavOpen ? item.name : item.icon}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
      <img className={style.Rocket} src={rocket} alt="rocket" />
    </nav>
  )
}

export default Navigation
