import { useMemo } from 'react'
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

export const navLinks = [
  {
    name: 'Home',
    icon: <AiOutlineHome />,
    scrollPosition: 0.5,
  },
  {
    name: 'About',
    icon: <FaInfo />,
    scrollPosition: 0,
  },
  {
    name: 'Projects',
    icon: <FaInfo />, // TODO: add new icon
    scrollPosition: 0,
  },
  {
    name: 'Contact',
    icon: <IoMdMail />,
    scrollPosition: 0,
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

  const toggleNavButton = useMemo(() => {
    return (
      <button
        aria-label="Toggle Navigation"
        onClick={() => setIsNavOpen()}
        css={[style.CloseButton, isNavOpen && style.CloseButtonActive]}
      >
        <BiArrowFromLeft size={24} />
      </button>
    )
  }, [isNavOpen])

  const rocketImage = useMemo(() => {
    return <img css={style.Rocket(isNavOpen)} src={rocket} alt="rocket" />
  }, [isNavOpen])

  return (
    <nav css={[style.Nav, isNavOpen && style.NavOpen]}>
      {toggleNavButton}
      <ul css={style.NavContainer}>
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
            <li
              css={style.NavItem(itemProgressValue)}
              onClick={() => handleScrollToView(item.name.toLowerCase())}
              key={item.name}
            >
              <Link css={style.NavLink} href={''}>
                {isNavOpen ? item.name : item.icon}
              </Link>
            </li>
          )
        })}
      </ul>
      {rocketImage}
    </nav>
  )
}

export default Navigation
