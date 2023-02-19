import { css } from '@emotion/react'

export const App = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '16px',
  marginLeft: '40px',
  marginRight: '45px',
  transition: '300ms ease-in-out',
})

export const App__content = (isNavOpen: boolean) =>
  css({
    width: '100%',
    maxWidth: '1200px',
    transition: 'margin-left 300ms ease-in-out',
    marginLeft: isNavOpen ? '200px' : '40px',
  })

export const App__heightContainer = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
