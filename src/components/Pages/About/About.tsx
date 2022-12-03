import * as styles from '../page.styles'
import skills from './skills'

import { HiLightBulb } from 'react-icons/hi'

const About = () => {
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
            <skill.icon />
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
