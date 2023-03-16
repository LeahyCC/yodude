import { memo } from 'react'
import { Link } from 'wouter'
import { RiContactsFill } from 'react-icons/ri'
// import { AiFillLinkedin } from 'react-icons/ai'
// import { AiFillGithub } from 'react-icons/ai'
import * as styles from './page.styles'

const Projects = () => {
  return (
    <div className={styles.containerFull}>
      <div className={styles.containerHeading}>
        <h1 className={styles.heading}>
          <RiContactsFill /> Projects
        </h1>
        <div className={styles.projectContainer}>
          <div style={{ border: '1px solid red', width: '100%', height: 125 }}>
            Project 1<h3>Graph QL</h3>
            <Link href="/project/graphql">
              <a className="link">See Project</a>
            </Link>
          </div>
          <div style={{ border: '1px solid red', width: '100%', height: 125 }}>
            Project 1<h3>Graph QL</h3>
            <Link href="/project/2">
              <a className="link">Profile 2</a>
            </Link>
          </div>
          <div style={{ border: '1px solid red', width: '100%', height: 125 }}>
            Project 1<h3>Graph QL</h3>
            <Link href="/project/3">
              <a className="link">Profile 3</a>
            </Link>
          </div>
          <div style={{ border: '1px solid red', width: '100%', height: 125 }}>
            Project 1<h3>Graph QL</h3>
            <Link href="/project/4">
              <a className="link">Profile 4</a>
            </Link>
          </div>
        </div>
        <ul className={styles.list}>List of projects?</ul>
      </div>
    </div>
  )
}

export default memo(Projects)
