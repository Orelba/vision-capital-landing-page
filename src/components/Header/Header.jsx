import styles from './header.module.css'
import cx from 'classnames'

export default function Header({ dashedText, text, highlight, className }) {
  // Split the text into three parts: before, highlighted, and after
  let beforeText
  let highlightedText
  let afterText

  if (text && highlight) {
    beforeText = text.substring(0, text.indexOf(highlight))
    highlightedText = text.substring(
      text.indexOf(highlight),
      text.indexOf(highlight) + highlight.length,
    )
    afterText = text.substring(text.indexOf(highlight) + highlight.length)
  }

  return (
    <div className={cx(styles.titles, className)}>
      {dashedText && <p>— {dashedText}</p>}
      {highlight ? (
        <h2>
          {beforeText}
          <span>{highlightedText}</span>
          {afterText}
        </h2>
      ) : (
        <h2 className={className}>{text}</h2>
      )}
    </div>
  )
}