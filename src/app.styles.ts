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
  width: 100%;
  transition: margin-left 300ms ease-in-out;
  margin-left: ${isNavOpen ? '200px' : '40px'};
`

export const App__heightContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
