import styles from './button.module.css'
import cx from 'classnames'

export default function Button({ children, variant = 'primary', size = 'medium', className }) {
  return (
    <button
      className={cx(className, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
        [styles.medium]: size === 'medium',
        [styles.small]: size === 'small',
      })}
    >
      {children}
    </button>
  )
}