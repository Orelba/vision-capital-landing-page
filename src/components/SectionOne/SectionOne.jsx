import styles from './section-one.module.css'
import Section from '../Section/Section'
import Button from '../Button/Button'

export default function SectionOne() {
  return (
    <Section padding="bottom">
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Vision Capital</h1>
          <p>The right way to fund and incubate your DeFi startup</p>
        </div>
        <div className={styles.buttons}>
          <Button>I Need Funding</Button>
          <Button variant="secondary">Become an Investor</Button>
        </div>
      </div>
    </Section>
  )
}
