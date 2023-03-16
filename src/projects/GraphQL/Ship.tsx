import { graphql, FragmentType, useFragment } from './gql'

export const ShipFragment = graphql(`
  fragment StarshipItem on Starship {
    id
    length
    manufacturers
    model
    name
    starshipClass
    maxAtmospheringSpeed
    hyperdriveRating
    crew
    created
  }
`)

export const Ship = (props: { ship: FragmentType<typeof ShipFragment> }) => {
  const ship = useFragment(ShipFragment, props.ship)
  return (
    <div>
      <h3>Name: {ship.name}</h3>
      <p>Model: {ship.model}</p>
      <br />
    </div>
  )
}
