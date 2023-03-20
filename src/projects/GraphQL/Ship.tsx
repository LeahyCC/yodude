import { FragmentType, useFragment } from './gql'
import { ShipFragment } from './useStarShips'

/**
 * This component isn't being used in the app,
 * but it's here to show how to use the fragment in a component
 */

export const Ship = (props: { ship: FragmentType<typeof ShipFragment> }) => {
  const ship = useFragment(ShipFragment, props.ship)
  return (
    <div>
      <h3>Name: {ship.name}</h3>
      <p>Model: {ship.model}</p>
    </div>
  )
}
