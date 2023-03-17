import { CSSProperties } from 'react'
import { ShipsTable } from './ShipsTable'
import { ImHome } from 'react-icons/im'

const homeButtonStyles: CSSProperties = {
  position: 'fixed',
  top: '2.5rem',
  left: '1rem',
  fontSize: '1.5rem',
  cursor: 'pointer',
}

export const GraphQL = () => {
  return (
    <div style={{ width: '100%' }}>
      <a onClick={() => history.back()} style={homeButtonStyles}>
        <ImHome /> Home
      </a>
      <br />
      <br />
      <br />
      <ShipsTable />
    </div>
  )
}
