import { css } from '@emotion/css'

export const InnerPage = (windowSize: { h: number; w: number }) => css`
  display: flex;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
  min-height: ${windowSize.h}px;
  width: 100%;
`
