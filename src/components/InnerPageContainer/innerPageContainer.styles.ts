import { css } from '@emotion/react'

export const InnerPage = (windowSize: { h: number; w: number }) =>
  css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: `${windowSize.h}px`,
    width: '100%',
  })
