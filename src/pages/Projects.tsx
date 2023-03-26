import { memo, MouseEvent } from 'react'
import { Link } from 'wouter'
import { IoConstruct } from 'react-icons/io5'
import { BiCubeAlt } from 'react-icons/bi'
import { SiGraphql } from 'react-icons/si'
import { CiViewTable } from 'react-icons/ci'
import * as styles from './page.styles'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

const Projects = () => {
  const handleClick = (event: MouseEvent<HTMLElement>, link: string) => {
    event.preventDefault()
    window.open(link, '_blank')
  }

  const project = (
    routeLink: string,
    title: string,
    projectList: { title: string; icon: ReactJSXElement }[],
    external: { title: string; link: string },
  ) => {
    return (
      <Link to={routeLink}>
        <div className={styles.project}>
          <div>
            <h2>{title}</h2>
            {projectList?.length > 0 && (
              <ol className={styles.projectList}>
                {projectList?.map((item) => (
                  <li key={item.title}>
                    {item.title} {item.icon}
                  </li>
                ))}
              </ol>
            )}
          </div>
          <a onClick={(e) => handleClick(e, external.link)}>{external.title}</a>
        </div>
      </Link>
    )
  }

  return (
    <div className={styles.containerFull}>
      <div className={styles.containerHeading}>
        <h1 className={styles.heading}>
          <IoConstruct /> Built-in Projects
        </h1>
        <div className={styles.projectContainer}>
          {project(
            '/project/graphql',
            'GraphQL CodeGen',
            [
              { title: 'GraphQL', icon: <SiGraphql /> },
              { title: 'GQL CodeGen', icon: <BiCubeAlt /> },
              { title: 'Tanstack Tables', icon: <CiViewTable /> },
            ],
            {
              title: 'The Projects Github',
              link: 'https://github.com/LeahyCC/yodude/tree/main/src/projects/GraphQL',
            },
          )}

          {project('', 'More to come...', [], {
            title: 'My Github',
            link: 'https://github.com/LeahyCC',
          })}
        </div>
      </div>
    </div>
  )
}

export default memo(Projects)
