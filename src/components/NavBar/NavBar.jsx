import styles from './navbar.module.css'
import Button from '../Button/Button'

export default function NavBar() {
  return (
    <nav>
      <img src="logo.svg" alt="logo" height="68" width="203" />
      <NavButtons />
    </nav>
  )
}

function NavButtons() {
  return (
    <div className={styles.buttons}>
      <div className={styles.menu}>
        <a href="#" className={styles['menu-item']}>For Projects</a>
        <a href="#" className={styles['menu-item']}>For Investors</a>
      </div>
      <Button variant='primary'>Placeholder</Button>
    </div>
  )
}