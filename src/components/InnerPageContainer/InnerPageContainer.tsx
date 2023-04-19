import { useEffect, useRef, memo } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import useGetWindowSize from '../../hooks/useGetWindowSize'
import * as style from './innerPageContainer.styles'

type InnerPageContainerProps = {
  children: React.ReactNode
  id: string
  setValue(latest: number, id: string): void
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

  const handleScroll = useMotionValueEvent(
    scrollYProgress,
    'change',
    (latest) => {
      setValue(latest, id)
    },
  )

  useEffect(() => {
    handleScroll
  }, [windowSize.h])

  return (
    <div id={id} css={style.InnerPage(windowSize)}>
      <div ref={ref} style={{ width: '100%' }}>
        {children}
      </div>
    </div>
  )
}

export default memo(InnerPageContainer)
