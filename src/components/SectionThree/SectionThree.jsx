import styles from './section-three.module.css'
import Section from '../Section/Section'
import Header from '../Header/Header'
import ListItem from '../ListItem/ListItem'

export default function SectionThree() {
  return (
    <Section padding="both">
      <div className="grid">
        <Header
          text="Traditional Fundraising Doesn't Work in DeFi"
          highlight="Doesn't Work"
          className={styles.header}
        />
        <ul className={styles.list}>
          <ListItem number="01">
            <ListItem.Title>
              Without a big budget, it&apos;s hard to
              <br />
              approach venture investors
            </ListItem.Title>
          </ListItem>
          <ListItem number="02">
            <ListItem.Title>
              VCs don&apos;t care about your DeFi idea
              <br />
              &#8211; only their gains
            </ListItem.Title>
          </ListItem>
          <ListItem number="03">
            <ListItem.Title>
              They force you into selling your
              <br />
              tokens at a huge discount…
            </ListItem.Title>
          </ListItem>
          <ListItem number="04">
            <ListItem.Title>
              ...Then dump them at the first
              <br />
              opportunity
            </ListItem.Title>
          </ListItem>
          <ListItem number="05">
            <ListItem.Title>
              Result: your token collapses.
              <br />
              Everyone goes home.
            </ListItem.Title>
          </ListItem>
        </ul>
      </div>
    </Section>
  )
}
