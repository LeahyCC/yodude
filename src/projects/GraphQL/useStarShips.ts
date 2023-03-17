import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'
import { graphql } from './gql'
import { StarshipItemFragment, AllStarshipsQueryQuery } from './gql/graphql'

export const ShipFragment = graphql(`
  fragment StarshipItem on Starship {
    name
    id
    model
    starshipClass
    length
    maxAtmospheringSpeed
  }
`)

const allStarshipsQueryDocument = graphql(`
  query allStarshipsQuery {
    allStarships {
      starships {
        ...StarshipItem
      }
    }
  }
`)

export const useStarShips = () =>
  useQuery({
    queryKey: ['starships'],
    queryFn: async () =>
      request(
        'https://swapi-graphql.netlify.app/.netlify/functions/index',
        allStarshipsQueryDocument,
      ),
  })

export const removeStarShipNuLLEntities = (
  data: AllStarshipsQueryQuery | undefined,
) => {
  return (
    (data?.allStarships?.starships?.filter(
      (item) => item !== null || item !== undefined,
    ) as StarshipItemFragment[]) || []
  )
}
