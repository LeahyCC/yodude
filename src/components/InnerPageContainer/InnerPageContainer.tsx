import useGetWindowSize from '../../hooks/useGetWindowSize'
import * as style from './innerPageContainer.styles'

type InnerPageContainerProps = {
  children: React.ReactNode
  id: string
}

const InnerPageContainer = ({ children, id }: InnerPageContainerProps) => {
  const windowSize = useGetWindowSize()
  return (
    <div id={id} className={style.InnerPage(windowSize)}>
      {children}
    </div>
  )
}

export default InnerPageContainer
