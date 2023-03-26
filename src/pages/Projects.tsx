import { memo } from 'react'
import { Link } from 'wouter'
import { IoConstruct } from 'react-icons/io5'
import { BiCubeAlt } from 'react-icons/bi'
import { SiGraphql } from 'react-icons/si'
import { CiViewTable } from 'react-icons/ci'
import * as styles from './page.styles'

const handleClick = (e: any, link: string) => {
  e.preventDefault()
  window.open(link, '_blank')
}

const Projects = () => {
  return (
    <div className={styles.containerFull}>
      <div className={styles.containerHeading}>
        <h1 className={styles.heading}>
          <IoConstruct /> Built-in Projects
        </h1>
        <div className={styles.projectContainer}>
          <Link to="/project/graphql">
            <div className={styles.project}>
              <div>
                <h2>GraphQL CodeGen</h2>
                <ol className={styles.projectList}>
                  <li>
                    GraphQL <SiGraphql />
                  </li>
                  <li>
                    GQL CodeGen <BiCubeAlt />
                  </li>
                  <li>
                    Tanstack Tables <CiViewTable />
                  </li>
                </ol>
              </div>
              <a
                onClick={(e) =>
                  handleClick(
                    e,
                    'https://github.com/LeahyCC/yodude/tree/main/src/projects/GraphQL',
                  )
                }
              >
                Repo Link
              </a>
            </div>
          </Link>

          <div className={styles.project} style={{ cursor: 'default' }}>
            <div>
              <h2>More to come...</h2>
            </div>
            <a
              onClick={(e) => handleClick(e, 'https://github.com/LeahyCC')}
              style={{ cursor: 'pointer' }}
            >
              My Github
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Projects)
