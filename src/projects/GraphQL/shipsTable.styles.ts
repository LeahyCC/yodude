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
  backgroundColor: '#1e2533',
})

export const tBody = css({})

export const tTr = css({
  ':nth-of-type(odd)': {
    backgroundColor: '#323C50',
  },
  ':nth-of-type(even)': {
    backgroundColor: '#2C3446',
  },
})

export const tTd = css({
  padding: '2%',
  textAlign: 'left',
  border: '1px solid #2C3446',
  color: '#A7A1AE',

  ':first-of-type': {
    color: '#FB667A',
  },
})

export const tTh = css({
  position: 'relative',
  backgroundColor: '#1e2533',
  padding: '1%',
  textAlign: 'left',
  color: '#A7A1AE',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: '#323C50',
  },
})
