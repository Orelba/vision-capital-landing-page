import styles from './section-five.module.css'
import Section from '../Section/Section'
import Header from '../Header/Header'
import ListItem from '../ListItem/ListItem'
import Button from '../Button/Button'

export default function SectionFive() {
  return (
    <Section padding="both" className={styles.bg}>
      <div className={styles.container}>
        <div className="grid">
          <Header
            dashedText="For Investors"
            text="Access high-potential DeFi startups before everyone else"
            highlight="high-potential"
            className={styles.header}
          />
        </div>
        <div className={'grid'}>
          <ul className={styles.list}>
            <ListItem>
              <ListItem.Title small>Low entry prices on DeFi tokens</ListItem.Title>
            </ListItem>
            <ListItem>
              <ListItem.Title small>Only vetted projects that passed our due diligence</ListItem.Title>
            </ListItem>
            <ListItem>
              <ListItem.Title small>High chance of success thanks to our incubation program</ListItem.Title>
            </ListItem>
            <ListItem>
              <ListItem.Title small>Fully decentralized </ListItem.Title>
            </ListItem>
            <ListItem>
              <ListItem.Title small>New projects every month</ListItem.Title>
            </ListItem>
            <ListItem>
              <ListItem.Title small>
                Yield farming rewards in PIE (<span className={styles.purple}>up to 100% a year</span>)
              </ListItem.Title>
            </ListItem>
          </ul>
        </div>
        <div className="grid">
          <Button className={styles.button}>Become an Investor</Button>
        </div>
      </div>
    </Section>
  )
}