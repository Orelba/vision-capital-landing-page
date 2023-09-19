import styles from './section-two.module.css'
import cx from 'classnames'
import Section from '../Section/Section'

export default function SectionTwo() {
  return (
    <Section>
      <div className={cx(styles.container, 'grid')}>
        <p className={styles.text}>
          <span>In the pipeline</span>
        </p>
        <img
          src="companies/harvard.svg"
          alt="Harvard logo"
          height="80"
          width="220"
          className={styles.image1}
        />
        <img
          src="companies/microsoft.svg"
          alt="Microsoft logo"
          height="80"
          width="220"
          className={styles.image2}
        />
        <img
          src="companies/nasa.svg"
          alt="NASA logo"
          height="80"
          width="220"
          className={styles.image3}
        />
        <img
          src="companies/yale.svg"
          alt="Yale logo"
          height="80"
          width="220"
          className={styles.image4}
        />
        <img
          src="companies/payoneer.svg"
          alt="Payonner logo"
          height="80"
          width="220"
          className={styles.image5}
        />
      </div>
    </Section>
  )
}
