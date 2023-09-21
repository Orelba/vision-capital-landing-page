import styles from './showcase-section.module.css'
import cx from 'classnames'
import Section from '../Section/Section'

const formatCompanyNameFromSrc = (inputString) => {
  // Extract the company name (text between the last '/' and '.svg')
  const match = inputString.match(/\/([^/]+)\.svg$/)
  if (!match) return null // Handle invalid input

  // Capitalize the first letter and add ' logo'
  const companyName = match[1]
  const formattedName =
    companyName.charAt(0).toUpperCase() + companyName.slice(1) + ' logo'

  return formattedName
}

export default function ShowcaseSection({ title, imagesArray, padding }) {
  const images = imagesArray.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={formatCompanyNameFromSrc(src)}
      height="80"
      width="220"
      className={styles[`image${index + 1}`]}
    />
  ))

  return (
    <Section padding={padding}>
      <div className={cx(styles.container, 'grid')}>
        <p className={styles.text}>
          <span>{title}</span>
        </p>
        {images}
      </div>
    </Section>
  )
}
