import { useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion'
import useGetWindowSize from '../../hooks/useGetWindowSize'
import * as style from './innerPageContainer.styles'

type InnerPageContainerProps = {
  children: React.ReactNode
  id: string
  setValue: (value: number, id: string) => void
}

const InnerPageContainer = ({
  children,
  id,
  setValue,
}: InnerPageContainerProps) => {
  const windowSize = useGetWindowSize()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
  })

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setValue(latest, id)
    })
  }, [windowSize.h])

  return (
    <div id={id} className={style.InnerPage(windowSize)}>
      <div ref={ref}>{children}</div>
    </div>
  )
}

export default InnerPageContainer
