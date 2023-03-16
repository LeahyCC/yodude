import request from 'graphql-request'
import { useQuery } from '@tanstack/react-query'

import { Ship } from './Ship'
import { graphql } from './gql'

const allStarshipsWithVariablesQueryDocument = graphql(`
  query allStarshipsQuery {
    allStarships {
      edges {
        node {
          ...StarshipItem
        }
      }
    }
  }
`)

export const GraphQL = () => {
  const { data, isLoading, error } = useQuery(['starships'], async () =>
    request(
      'https://swapi-graphql.netlify.app/.netlify/functions/index',
      allStarshipsWithVariablesQueryDocument,
    ),
  )

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
            {data.allStarships?.edges?.map(
              (e, i) => e?.node && <Ship ship={e?.node} key={`ship-${i}`} />,
            )}
          </ul>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  )
}
