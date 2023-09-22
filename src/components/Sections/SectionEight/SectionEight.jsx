import styles from './section-eight.module.css'
import cx from 'classnames'
import Section from '../../Section/Section'
import Header from '../../Header/Header'
import Description from '../../Description/Description'
import Button from '../../Button/Button'

export default function SectionEight() {
  return (
    <Section className={styles.bg}>
      <div className={cx('grid', styles.container)}>
        <div className={styles['col-left']}>
          <div className={styles.header}>
            <Header text="Join" highlight="Join" />
            <Header
              text="Vision Capital and get funded"
              textColor="white"
              className={styles.white}
            />
            <Description className={styles.grey}>
              We&apos;ll get back to you within 24 hours
            </Description>
          </div>
          <Form />
        </div>

        <div className={styles['col-right']}>
          <div className={styles.social}>
            <a href="#">
              <img src="/social/facebook.svg" alt="Facebook icon" />
            </a>
            <a href="#">
              <img src="/social/twitter.svg" alt="Twitter icon" />
            </a>
            <a href="#">
              <img src="/social/telegram.svg" alt="Telegram icon" />
            </a>
            <a href="https://github.com/Orelba/vision-capital-landing-page" target='_blank' rel="noreferrer">
              <img src="/social/github.svg" alt="Github icon" />
            </a>
          </div>
          <div className={styles.links}>
            <a href="#">hello@visioncapital.com</a>
            <a href="#">Join us on Telegram</a>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Form() {
  return (
    <form>
      <div className={styles.inputs}>
        <div className={styles.left}>
          <label htmlFor="project-name">
            How is your project called?
            <input type="text" id="project-name" name="project-name" />
          </label>
          <label htmlFor="email">
            Your Email
            <input type="text" id="email" name="email" />
          </label>
        </div>
        <div className={styles.right}>
          <label htmlFor="project-description">
            Please tell us a few words about the project
            <input
              type="text"
              id="project-description"
              name="project-description"
            />
          </label>
          <label htmlFor="telegram-name">
            Telegram Name
            <input type="text" id="telegram-name" name="telegram-name" />
          </label>
        </div>
      </div>
      <Button
        type="button"
        size="small"
        className={styles['form-button']}
      >
        Send
      </Button>
    </form>
  )
}