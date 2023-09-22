import { forwardRef } from 'react'
import styles from './section.module.css'
import cx from 'classnames'

const Section = forwardRef(function Section({ padding, className, children }, ref) {

  return (
    <div
      ref={ref}
      className={cx(styles.section, className, {
        [styles['pad-both']]: padding === 'both',
        [styles['pad-bottom']]: padding === 'bottom',
        [styles['pad-top']]: padding === 'top',
      })}
    >
      {children}
    </div>
  )
})

export default Section
