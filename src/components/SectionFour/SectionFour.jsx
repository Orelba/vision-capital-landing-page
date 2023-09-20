import styles from './section-four.module.css'
import Section from '../Section/Section'
import Header from '../Header/Header'
import Description from '../Description/Description'
import ListItem from '../ListItem/ListItem'
import Button from '../Button/Button'

export default function SectionFour() {
  return (
    <Section padding="both" className={styles.bg}>
      <div className={styles.container}>
        <div className="grid">
          <div className={styles['text-container']}>
            <Header
              dashedText="For Projects"
              text="Vision is the answer"
              highlight="answer"
            />
            <Description width="616">
              You have an idea, IncuPie has a plan. We offer everything you need
              to go from an early-stage idea to a successful exchange listing.
            </Description>
          </div>
        </div>
        <div className={'grid'}>
          <ul className={styles.list}>
            <ListItem>
              <ListItem.Title small>Decentralized investments</ListItem.Title>
              <ListItem.Description>
                we&apos;ll distribute your tokens among our huge and active
                community
              </ListItem.Description>
            </ListItem>
            <ListItem>
              <ListItem.Title small>
                Access to professional investors
              </ListItem.Title>
              <ListItem.Description>
                we&apos;ll put you in touch with funds and business angels ready
                to invest larger sums
              </ListItem.Description>
            </ListItem>
            <ListItem>
              <ListItem.Title small>Exchange relations</ListItem.Title>
              <ListItem.Description>
                get better terms when listing your token
              </ListItem.Description>
            </ListItem>
            <ListItem>
              <ListItem.Title small>Staking</ListItem.Title>
              <ListItem.Description>
                allow users to stake your tokens on DeFiPie and earn rewards
              </ListItem.Description>
            </ListItem>
            <ListItem>
              <ListItem.Title small>Product-market fit analysis</ListItem.Title>
            </ListItem>
            <ListItem>
              <ListItem.Title small>Detailed tokenomics</ListItem.Title>
            </ListItem>
            <ListItem>
              <ListItem.Title small>Smart contract audit</ListItem.Title>
            </ListItem>
            <ListItem>
              <ListItem.Title small>
                Community-building and social media marketing
              </ListItem.Title>
            </ListItem>
            <ListItem>
              <ListItem.Title small>
                White Paper, blog, and media content from the best authors
              </ListItem.Title>
            </ListItem>
          </ul>
        </div>
        <div className="grid">
          <div className={styles.buttons}>
            <Button>I Need Funding</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </div>
    </Section>
  )
}