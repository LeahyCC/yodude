import { css } from '@emotion/css'

export const container = css`
  margin-right: 45px;
`

export const heading = css`
  font-size: 6rem;

  @media (max-width: 1360px) {
    font-size: 5rem;
  }

  @media (max-width: 975px) {
    font-size: 3rem;
  }

  @media (max-width: 700px) {
    font-size: 2.5rem;
  }
`
