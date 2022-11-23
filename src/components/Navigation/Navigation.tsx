import classNames from 'classnames'
import { Link } from 'wouter'
import * as style from './navigation.styles'
import rocket from './rocket.png'

import { BiArrowFromLeft } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'
import { FaInfo } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

type NavigationProps = {
  isNavOpen: boolean
  setIsNavOpen: () => void
  containerScrollValues: {
    home: number
    about: number
    contact: number
  }
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
    name: 'Contact',
    icon: <IoMdMail />,
  },
]

const Navigation = ({
  isNavOpen,
  setIsNavOpen,
  containerScrollValues,
}: NavigationProps) => {
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
          /**
           * format the number to be 0 to 200
           * instead of 0 to 1 (ie: 0.5)
           */
          const itemProgressValue = Math.round(
            containerScrollValues[
              item.name.toLowerCase() as keyof typeof containerScrollValues
            ] *
              100 *
              2,
          )
          return (
            <li className={style.NavItem(itemProgressValue)} key={item.name}>
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
