import React from 'react'
import { render, screen, act, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  beforeEach(async () => {
    await act(async () => {
      render(<App />)
    })
  })

  it('renders App component', () => {
    const headingText = screen.queryByText(
      'A Frontend Engineer, based in Boulder Colorado.',
    )
    expect(headingText).toBeInTheDocument()
  })

  it('should toggle Navigation open and close', () => {
    const nav = screen.queryByRole('navigation')
    const toggleButton = screen.getByRole('button', {
      name: 'Toggle Navigation',
    })

    expect(nav).toBeInTheDocument()
    expect(screen.queryByText(/home/i)).toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(screen.queryByText(/home/i)).toBeNull()
  })
})
