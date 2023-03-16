import React from 'react'
import { render, screen, act, fireEvent } from '@testing-library/react'
import { expect, beforeEach, describe, test } from 'vitest'
import App from './App'

// test

describe('App', () => {
  beforeEach(async () => {
    await act(async () => {
      render(<App />)
    })
  })

  test('renders App component', () => {
    const headingText = screen.queryByText(
      'A Frontend Engineer, based in Boulder Colorado.',
    )
    expect(headingText).toBeInTheDocument()
  })

  test('should toggle Navigation open and close', () => {
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
