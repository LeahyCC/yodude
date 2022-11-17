import { MdWavingHand } from 'react-icons/md'
import * as styles from './page.styles'
import me from './me.png'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerHeading}>
        <h1 className={styles.heading}>
          <MdWavingHand /> Hi, I&apos;m Colin!
        </h1>
        <span className={styles.subHeading}>
          A Frontend Engineer, based in Boulder Colorado.
        </span>
      </div>
      <img className={styles.image} src={me} />
    </div>
  )
}

export default Home
