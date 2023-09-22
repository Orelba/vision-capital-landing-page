import styles from './section-six.module.css'
import cx from 'classnames'
import Section from '../../Section/Section'
import Header from '../../Header/Header'
import Description from '../../Description/Description'

export default function SectionSix() {
  return (
    <Section padding="bottom" className={styles['bg-logo']}>
      <div className={cx('grid', styles['align-center'])}>
        <div className={styles.container}>
          <img src="/favicon.svg" alt="Logo" height="119" width="104" className={styles['img-margin']} />
          <Header
            text="Brought to you by DeFiPie"
            highlight="Brought to you"
            className={styles.header}
          />
          <div className={styles.descriptions}>
            <Description width={579}>
              DeFiPie is the first DeFi app to bring together crypto lending,
              staking, P2P loans, liquidity mining, and trading. We have a
              strong development and marketing team and an active,
              constantly growing community.
            </Description>
            <Description width={579}>
              Project incubation is a natural next step: now that we&apos;ve done it
              ourselves, we want to help other quality projects to achieve success.
            </Description>
          </div>
        </div>
      </div>
    </Section>
  )
}