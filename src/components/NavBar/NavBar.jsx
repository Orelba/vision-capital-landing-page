import styles from './navbar.module.css'
import Button from '../Button/Button'

export default function NavBar({ scrollToSectionFour, scrollToSectionFive }) {
  return (
    <nav>
      <img src="logo.svg" alt="logo" height="68" width="203" />
      <NavButtons
        scrollToSectionFour={scrollToSectionFour}
        scrollToSectionFive={scrollToSectionFive}
      />
    </nav>
  )
}

function NavButtons({ scrollToSectionFour, scrollToSectionFive }) {
  return (
    <div className={styles.buttons}>
      <div className={styles.menu}>
        <a href="#" onClick={scrollToSectionFour} className={styles['menu-item']}>For Projects</a>
        <a href="#" onClick={scrollToSectionFive} className={styles['menu-item']}>For Investors</a>
      </div>
      <Button
        variant='primary'
        onClick={() =>
          window.open('https://github.com/Orelba/vision-capital-landing-page', '_blank')
        }
      >
        Go to GitHub Repo
      </Button>
    </div>
  )
}