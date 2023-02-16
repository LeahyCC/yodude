import { Suspense, lazy } from 'react'
import * as styles from '../page.styles'
const SkillsList = lazy(() => import('./skills'))

import { HiLightBulb } from 'react-icons/hi'

const About = () => {
  return (
    <div className={styles.containerFull}>
      <h1 className={styles.heading}>
        <HiLightBulb /> Scalable Solutions
      </h1>
      <p className={styles.paragraph}>
        My passion lies in resolving software issues with scalable solutions. I
        enjoy crafting and designing applications with a seamless user
        experience and easy maintenance. With my professional experience, I have
        successfully built applications from scratch utilizing these tools.
      </p>
      <Suspense>
        <SkillsList />
      </Suspense>
      <p className={styles.paragraph}>
        As a developer with expertise in both title and skill, I possess a keen
        sense for design and user experience. My commitment to excellence drives
        me to continuously identify and promote enhancements to code, team and
        scrum processes, as well as developer and end-user experiences. With a
        proactive and collaborative approach, I&apos;m always seeking
        opportunities to learn and advance, and work effectively both
        independently and as a part of a team. I thrive in a fast-paced
        environment where close collaboration among product, QA, and engineering
        is customary.
      </p>
    </div>
  )
}

export default About
