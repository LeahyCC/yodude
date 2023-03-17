import { css } from '@emotion/react'

export const container = css({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  marginTop: '5%',
  marginBottom: '5%',
})

export const table = css({
  display: 'table',
  width: '100%',
  borderSpacing: '22px',
  backgroundColor: '#2C3446',
})

export const tBody = css({})

export const tTr = css({
  ':nth-child(odd)': {
    backgroundColor: '#323C50',
  },
  ':nth-child(even)': {
    backgroundColor: '#2C3446',
  },
})

export const tTd = css({
  padding: '2%',
  textAlign: 'left',
  border: '1px solid #2C3446',
  color: '#A7A1AE',

  ':first-child': {
    color: '#FB667A',
  },
})

export const tTh = css({
  backgroundColor: '#2C3446',
  padding: '1%',
  textAlign: 'left',
  color: '#A7A1AE',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: '#323C50',
  },
})
