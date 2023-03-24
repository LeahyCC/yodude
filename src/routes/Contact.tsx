import { memo } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { RiContactsFill } from 'react-icons/ri'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import * as styles from './page.styles'

const Contact = () => {
  const [state, handleSubmit] = useForm('xvonbwjr')

  const contactLinks = [
    {
      name: 'LinkedIn',
      icon: <AiFillLinkedin />,
      link: 'https://www.linkedin.com/in/colin-leahy-009322131/',
    },
    {
      name: 'GitHub',
      icon: <AiFillGithub />,
      link: 'https://github.com/LeahyCC',
    },
  ]

  return (
    <div className={styles.containerFull}>
      <div className={styles.containerHeading}>
        <h1 className={styles.heading}>
          <RiContactsFill /> Contact Me
        </h1>
        <p className={styles.paragraph}>
          I&apos;m always open to new opportunities and challenges. If you have
          any questions or just want to say hi, feel free to contact me.
        </p>
        <ul className={styles.list}>
          {contactLinks.map((skill) => (
            <li className={styles.listItem} key={skill.name}>
              <a
                href={skill.link}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                {skill.icon}
                {skill.name}
              </a>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default memo(Contact)
