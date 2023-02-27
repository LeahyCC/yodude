import * as styles from '../page.styles'

import {
  SiJest,
  SiTypescript,
  SiGraphql,
  SiApollographql,
  SiRedux,
  SiTestinglibrary,
  SiJira,
  SiWebpack,
  SiAdobecreativecloud,
} from 'react-icons/si'
import { DiReact, DiSass } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { BiGitPullRequest } from 'react-icons/bi'
import { FiFigma } from 'react-icons/fi'
import { AiFillGithub, AiOutlineGitlab } from 'react-icons/ai'

const skills = [
  {
    name: 'React',
    icon: DiReact,
  },
  {
    name: 'Typescript',
    icon: SiTypescript,
  },
  {
    name: 'SASS',
    icon: DiSass,
  },
  {
    name: 'NodeJS',
    icon: FaNodeJs,
  },
  {
    name: 'GraphQL',
    icon: SiGraphql,
  },
  {
    name: 'Apollo',
    icon: SiApollographql,
  },
  {
    name: 'Redux Toolkit',
    icon: SiRedux,
  },
  {
    name: 'Jest',
    icon: SiJest,
  },
  {
    name: 'Testing Library',
    icon: SiTestinglibrary,
  },
  {
    name: 'Webpack',
    icon: SiWebpack,
  },
  {
    name: 'Jira',
    icon: SiJira,
  },
  {
    name: 'Figma',
    icon: FiFigma,
  },
  {
    name: 'Git',
    icon: BiGitPullRequest,
  },
  {
    name: 'GitHub',
    icon: AiFillGithub,
  },
  {
    name: 'GitLab',
    icon: AiOutlineGitlab,
  },
  {
    name: 'Adobe Suite',
    icon: SiAdobecreativecloud,
  },
]

const SkillsList = () => {
  return (
    <ul className={styles.list}>
      {skills.map((skill) => (
        <li className={styles.listItem} key={skill.name}>
          <skill.icon />
          {skill.name}
        </li>
      ))}
    </ul>
  )
}

export default SkillsList
