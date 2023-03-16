# WIP - yodude a portfolio landing page

- Deployed using [vercel](https://vercel.com/)
- [yodude.io](https://yodude.io)

## Usage
- Install `pnpm install`
- Run locally `pnpm run dev`
- Test `pnpm run test:staged`



## Supporting Packages
Yodude includes the following features:

- React: A popular JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Vite: A build tool that offers fast and flexible development server and build system.
- Emotion: A CSS-in-JS library for styling React components.
- GraphQL: A query language for APIs that allows for more efficient data fetching and type-safe queries.
- GraphQL Codegen: A tool that generates TypeScript typings and hooks for GraphQL queries.
- React Query: A library for managing data fetching and caching in React applications.
- Vitest: Provides a simple and easy-to-use API for testing.
- Testing Library (React): A testing utility for React that focuses on testing the user's behavior rather than implementation details.
- Framer Motion: A library for creating smooth, performant animations in React.
- Wouter: A tiny router for React that uses the newer useRouteMatch hook.



## Feature - Navigation Scroll Progress Tracker

The navigation scroll progress tracker is a feature that displays a progress bar under each navigation element. The progress bar indicates the height of each content element 'page' and shows the user how far they have scrolled through the page.

#### How it Works

The navigation scroll progress tracker works by setting state of the scroll position into properties on the object `containerScrollValues`. These properties represent the scroll position of each content element.

```
const [containerScrollValues, setContainerScrollValues] = useState({
  elementOne: 0,
  elementTwo: 0,
  elementThree: 0,
})
```

When the user scrolls through the element, the width of the progress bar under each navigation element is updated based on the current scroll position. This is done getting the ref of each page element's height from `framer-motion.scrollYProgress`. We return the value of the updated height to the state updater setValue with the latest position with values of `0-1` (`0.5` being element center on screen) and `id` of the in-view element 'page'. Also set a dependancy of the useEffect, `windowSize.h` incase the screen resolution changes.

```
const { scrollYProgress } = useScroll({
  target: ref,
})
```

```
useEffect(() => {
  return scrollYProgress.onChange((latest) => {
    setValue(latest, id)
  })
}, [windowSize.h])
```

`handleSetValue` state updater.

```
const handleSetValue = (value: number, id: string) => {
  setContainerScrollValues((state) => ({
    ...state,
    [id]: value,
  }))
}
```

Now that there's tracking of the height represented as values from of each element. We convert the `0-1` values into `0-200`. This way we know when the element is center at `100`.

```
const itemProgressValue = Math.round(
  containerScrollValues[elementName] * 100 * 2
)
```

As the element start to scroll up beond center, multiply by -1 to convert the negitave number to posivive after subtracting from 200. This way we always have values btween 0-100.

```
const itemValueFormatted =
    itemProgressValue < 100 ? itemProgressValue : (itemProgressValue - 200) * -1
```
