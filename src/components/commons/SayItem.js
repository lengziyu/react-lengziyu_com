import React from 'react'
import styles from './SayItem.less'

const SayItem = (data) =>{
  return (
    <div className={styles.section}>
      <div className={styles.sayLeft}>
        <div className={styles.avatar}></div>
        <div className={styles.name}>
          <span>{ data.data.name }</span>
        </div>
      </div>
      <div className={styles.sayRight}>
        <div className={styles.info}>
          <div className={styles.date}>{ data.data.date }</div>
          <div className={styles.msg}>{ data.data.msg }</div>
        </div>
      </div>
    </div>
  )
}
export default SayItem;
