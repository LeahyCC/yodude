import { useState, useEffect } from 'react'

const useGetWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  })

  useEffect(() => {
    let debounceTimeoutId: NodeJS.Timeout | null = null

    const handleResize = () => {
      // Use a debounce to prevent the resize event from triggering too often
      if (debounceTimeoutId) {
        clearTimeout(debounceTimeoutId)
      }
      debounceTimeoutId = setTimeout(() => {
        setWindowSize({
          w: window.innerWidth,
          h: window.innerHeight,
        })
      }, 200)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup function to remove the resize event listener
    return () => {
      window.removeEventListener('resize', handleResize)
      if (debounceTimeoutId) {
        clearTimeout(debounceTimeoutId)
      }
    }
  }, [])

  return windowSize
}

export default useGetWindowSize
