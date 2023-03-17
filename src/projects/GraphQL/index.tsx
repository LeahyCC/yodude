import { ShipsTable } from './ShipsTable'

export const GraphQL = () => {
  return (
    <div style={{ width: '100%' }}>
      <a onClick={() => history.back()} className="link">
        Home
      </a>
      <ShipsTable />
    </div>
  )
}
