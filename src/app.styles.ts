import { css } from '@emotion/css'

export const App = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-left: 40px;
  margin-right: 45px;
  transition: 300ms ease-in-out;
`

export const App__content = (isNavOpen: boolean) => css`
  transition: margin-left 300ms ease-in-out;
  margin-left: ${isNavOpen ? '200px' : '40px'};
`

export const App__heightContainer = (windowSize: {
  w: number
  h: number
}) => css`
  min-height: ${windowSize.h}px;
  display: flex;
  justify-content: center;
  align-items: center;
`
