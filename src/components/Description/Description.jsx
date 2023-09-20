import styles from './description.module.css'

export default function Description({ children, width }) {
  return (
    <p className={styles.description} style={width && { width: width + 'px' }}>
      {children}
    </p>
  )
}