import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'
import { graphql } from './gql'

export const ShipFragment = graphql(`
  fragment StarshipItem on Starship {
    name
    id
    model
    manufacturers
    starshipClass
    costInCredits
    length
    crew
    passengers
    maxAtmospheringSpeed
    hyperdriveRating
    MGLT
    cargoCapacity
    consumables
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
