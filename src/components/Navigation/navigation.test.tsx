import { render } from '@testing-library/react'

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

  const { getByRole, queryByRole, queryByText } = render(
    <Navigation
      isNavOpen={isNavOpen}
      setIsNavOpen={toggleNavigation}
      containerScrollValues={containerScrollValues}
    />,
  )

  // assure that the component is rendered with navigation role
  const navigation = queryByRole('navigation')
  const toggleButton = getByRole('button', { name: 'Toggle Navigation' })

  it('should render successfully', () => {
    expect(navigation).toBeTruthy()
    expect(queryByText('Home')).toBeTruthy()
    expect(queryByText('About')).toBeTruthy()
    expect(queryByText('Contact')).toBeTruthy()
  })

  it('should render the navigation toggle button', () => {
    expect(toggleButton).toBeTruthy()
  })

  it('should render the navigation open by default', () => {
    expect(navIsOpen).toBe(true)
  })
})
