import { useStarShips } from './useStarShips'
import { Ship } from './Ship'

export const GraphQL = () => {
  const { data, isLoading } = useStarShips()

  return (
    <div style={{ width: '100%' }}>
      <a onClick={() => history.back()} className="link">
        Home
      </a>
      <br />
      <br />
      <br />
      <div className="App">
        {data && !isLoading ? (
          <ul>
            {data?.allStarships?.starships?.map(
              (ship, i) => ship && <Ship ship={ship} key={`ship-${i}`} />,
            )}
          </ul>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  )
}
