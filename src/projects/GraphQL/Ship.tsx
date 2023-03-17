import { FragmentType, useFragment } from './gql'
import { ShipFragment } from './useStarShips'

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
