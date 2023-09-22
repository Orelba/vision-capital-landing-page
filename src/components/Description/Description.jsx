import styles from './description.module.css'
import cx from 'classnames'

export default function Description({ children, width, className }) {
  return (
    <p className={cx(styles.description, className)} style={width && { width: width + 'px' }}>
      {children}
    </p>
  )
}