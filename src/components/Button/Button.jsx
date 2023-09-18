import styles from './button.module.css'

export default function Button({ variant = 'primary', size = 'medium', children }) {
  const classList = [
    variant === 'primary' ? styles.primary : styles.secondary,
    size === 'medium' ? styles.medium : styles.small
  ]

  return (
    <button className={classList.join(' ')}>
      {children}
    </button>
  )
}