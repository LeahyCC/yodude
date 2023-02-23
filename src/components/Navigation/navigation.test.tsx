import { render, screen } from '@testing-library/react'

// components
import Navigation from './Navigation'
import { navIsOpen } from '../../App'

describe('Navigation', () => {
  const toggleNavigation = () => jest.fn()
  const isNavOpen = navIsOpen
  const containerScrollValues = {
    home: 0,
    about: 0,
    contact: 0,
  }

  beforeEach(() => {
    render(
      <Navigation
        isNavOpen={isNavOpen}
        setIsNavOpen={toggleNavigation}
        containerScrollValues={containerScrollValues}
      />,
    )
  })

  it('should render successfully', () => {
    expect(screen.queryByRole('navigation')).toBeTruthy()
  })

  it('should render with known links', () => {
    expect(screen.queryByText('Home')).toBeTruthy()
    expect(screen.queryByText('About')).toBeTruthy()
    expect(screen.queryByText('Contact')).toBeTruthy()
  })

  it('should render the navigation toggle button', () => {
    const navToggleButton = screen.getByRole('button', {
      name: 'Toggle Navigation',
    })
    expect(navToggleButton).toBeTruthy()
  })

  it('should render the navigation open by default', () => {
    expect(navIsOpen).toBe(true)
  })
})
