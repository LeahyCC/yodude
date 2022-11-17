import * as styles from './page.styles'

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
import { HiLightBulb } from 'react-icons/hi'

const About = () => {
  const skills = [
    {
      name: 'React',
      icon: <DiReact />,
    },
    {
      name: 'Typescript',
      icon: <SiTypescript />,
    },
    {
      name: 'SASS',
      icon: <DiSass />,
    },
    {
      name: 'NodeJS',
      icon: <FaNodeJs />,
    },
    {
      name: 'GraphQL',
      icon: <SiGraphql />,
    },
    {
      name: 'Apollo',
      icon: <SiApollographql />,
    },
    {
      name: 'Redux Toolkit',
      icon: <SiRedux />,
    },
    {
      name: 'Jest',
      icon: <SiJest />,
    },
    {
      name: 'Testing Library',
      icon: <SiTestinglibrary />,
    },
    {
      name: 'Webpack',
      icon: <SiWebpack />,
    },
    {
      name: 'Jira',
      icon: <SiJira />,
    },
    {
      name: 'Figma',
      icon: <FiFigma />,
    },
    {
      name: 'Git',
      icon: <BiGitPullRequest />,
    },
    {
      name: 'GitHub',
      icon: <AiFillGithub />,
    },
    {
      name: 'GitLab',
      icon: <AiOutlineGitlab />,
    },
    {
      name: 'Adobe Suite',
      icon: <SiAdobecreativecloud />,
    },
  ]

  return (
    <div className={styles.containerFull}>
      <h1 className={styles.heading}>
        <HiLightBulb /> Scalable Solutions
      </h1>
      <p className={styles.paragraph}>
        Solving software problems with scalable solutions is my passion. I love
        to build and design applications with seamless UX and maintainability. I
        have professional experience building applications from ground up with..
      </p>
      <ul className={styles.list}>
        {skills.map((skill) => (
          <li className={styles.listItem} key={skill.name}>
            {skill.icon}
            {skill.name}
          </li>
        ))}
      </ul>
      <p className={styles.paragraph}>
        Although a developer in title and skill set, I have an eye for design
        and UX. I&apos;m an advocate for quality and find fulfillment in
        identifying and facilitating improvements to code, team and scrum
        processes, developer and end user experiences. I&apos;m a self starter
        and a team player, always looking to learn and grow. I thrive in a fast
        past environment where close collaboration between product, QA, and
        engineering is the norm.
      </p>
    </div>
  )
}

export default About
