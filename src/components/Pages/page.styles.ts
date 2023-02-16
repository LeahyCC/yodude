import { css } from '@emotion/css'

export const container = css`
  font-family: Arial, Helvetica, sans-serif !important;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 745px) {
    grid-template-columns: 1fr;
  }
`

export const containerFull = css`
  font-family: Arial, Helvetica, sans-serif !important;
  display: grid;
  grid-template-columns: 1fr;
`

export const paragraph = css`
  font-size: 1.5rem;

  :first-of-type {
    margin-top: 1rem;
  }

  :not(last-child) {
    margin-bottom: 1rem;
  }
`

export const list = css`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 3px;
  font-size: 1.4rem;
  margin: 20px auto;
  width: 100%;
`

export const listItem = css`
  display: flex;
  align-items: center;

  :not(last-child) {
    margin-bottom: 1rem;
  }

  & > * {
    margin-right: 1rem;
  }
`

export const heading = css`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 5rem;
  color: white;

  > * {
    stroke: white;
    margin-right: 20px;
  }

  @media (max-width: 1135px) {
    font-size: 3rem;
  }
`

export const containerHeading = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const subHeading = css`
  display: block;
  margin-top: 0.5rem;
  font-size: 2.5rem;
`
export const image = css`
  max-width: 100%;
  width: 70%;
`
export const link = css`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  > :first-child {
    margin-right: 10px;
  }

  &:hover {
    text-decoration: underline;
  }
`
