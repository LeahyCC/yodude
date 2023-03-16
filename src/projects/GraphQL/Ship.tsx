import { FragmentType, useFragment } from './gql'
import { ShipFragment } from './useStarShips'

export const Ship = (props: { ship: FragmentType<typeof ShipFragment> }) => {
  const ship = useFragment(ShipFragment, props.ship)
  return (
    <div>
      <h3>Name: {ship.name}</h3>
      <p>Model: {ship.model}</p>
      <p>Manufacturer: {ship.manufacturers}</p>
      <p>Cost: {ship.costInCredits}</p>
      <p>Length: {ship.length}</p>
      <p>Max Atmosphering Speed: {ship.maxAtmospheringSpeed}</p>
      <p>Crew: {ship.crew}</p>
      <p>Passengers: {ship.passengers}</p>
      <p>Cargo Capacity: {ship.cargoCapacity}</p>
      <p>Consumables: {ship.consumables}</p>
      <p>Hyperdrive Rating: {ship.hyperdriveRating}</p>
      <p>MGLT: {ship.MGLT}</p>
      <br />
    </div>
  )
}
