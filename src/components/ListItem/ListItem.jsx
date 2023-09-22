import React from 'react'
import styles from "./list-item.module.css"
import cx from 'classnames'

const getChildrenOnDisplayName = (children, displayName) =>
  React.Children.map(children, child =>
    child.type.displayName === displayName ? child : null
  )

export default function ListItem({ children, number }) {
  const title = getChildrenOnDisplayName(children, 'Title')
  const description = getChildrenOnDisplayName(children, 'Description')

  return (
    <li className={styles.item}>
      <span className={styles.number}>
        {number ? number :
          <img src="tick.svg" alt="Tick Icon" height="24" width="24" className={styles.tick} />
        }
      </span>
      <div className={styles['text-container']}>
        {title}
        {description}
      </div>
    </li>
  )
}

function Title({ children, small }) {
  return (
    <p
      className={cx(styles['item-title'], {
        [styles['t-small']]: small,
      })}
    >
      {children}
    </p>
  )
}
Title.displayName = 'Title'
ListItem.Title = Title

function Description({ children }) {
  return (
    <p className={styles['item-description']}>
      {children}
    </p>
  )
}
Description.displayName = 'Description'
ListItem.Description = Description