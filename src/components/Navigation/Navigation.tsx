import { useLocation, Link } from 'wouter'
import classNames from 'classNames'
import * as style from './navigation.styles'
import rocket from './rocket.png'

import { BiArrowFromLeft } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'
import { FaInfo } from 'react-icons/fa'
import { BiGitBranch } from 'react-icons/bi'
import { CgFileDocument } from 'react-icons/cg'

type NavigationProps = {
  isNavOpen: boolean
  setIsNavOpen: () => void
}

const navLinks = [
  {
    name: 'Home',
    icon: <AiOutlineHome />,
  },
  {
    name: 'About',
    icon: <FaInfo />,
  },
  {
    name: 'Projects',
    icon: <BiGitBranch />,
  },
  {
    name: 'Resume',
    icon: <CgFileDocument />,
  },
]

const Navigation = ({ isNavOpen, setIsNavOpen }: NavigationProps) => {
  const [location] = useLocation()

  const handleScrollToView = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={classNames(style.Nav, {
        [style.NavOpen]: isNavOpen,
      })}
    >
      <button
        onClick={() => setIsNavOpen()}
        className={classNames(style.CloseButton, {
          [style.CloseButtonActive]: isNavOpen,
        })}
      >
        <BiArrowFromLeft size={24} />
      </button>
      <ul className={style.NavContainer}>
        {navLinks.map((item) => {
          const className = classNames(style.NavItem, {
            [style.NavItemActive]: location === `/${item.name.toLowerCase()}`,
          })

          return (
            <li className={className} key={item.name}>
              <Link
                className={style.NavLink}
                onClick={() => handleScrollToView(item.name.toLowerCase())}
                href={`${item.name.toLowerCase()}`}
              >
                {isNavOpen ? item.name : item.icon}
              </Link>
            </li>
          )
        })}
      </ul>
      <img className={style.Rocket(isNavOpen)} src={rocket} alt="rocket" />
    </nav>
  )
}

export default Navigation
