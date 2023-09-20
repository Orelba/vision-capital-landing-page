import styles from './section.module.css'
import cx from 'classnames'

export default function Section({ padding, className, children }) {
  return (
    <div
      className={cx(styles.section, className, {
        [styles['pad-both']]: padding === 'both',
        [styles['pad-bottom']]: padding === 'bottom',
        [styles['pad-top']]: padding === 'top',
      })}
    >
      {children}
    </div>
  )
}
