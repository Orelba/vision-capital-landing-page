import styles from './button.module.css'
import cx from 'classnames'

export default function Button({ variant = 'primary', size = 'medium', children }) {
  return (
    <button
      className={cx({
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
        [styles.medium]: size === "medium",
        [styles.small]: size === "small",
      })}
    >
      {children}
    </button>
  )
}