import React from 'react'
import styles from './WorkItem.less'

const WorkItem = (data) =>{
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.workHeader}>
          <h2 className={styles.workTitle}>{data.data.company}</h2>
        </div>
        <div className={styles.volunteer}>
          <div className={styles.voHeader}>
            <div className={styles.voLeft}>{data.data.position}</div>
            <div className={styles.voDate}>{data.data.startTime} - {data.data.endTime}</div>
          </div>
          <div className={styles.summary}>
            <p>
              {data.data.summary}
            </p>
          </div>
          <div className={styles.skillTags}>
              {data.data.skillTags.map(item =>
                <span key={item}> {item} </span>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default WorkItem;
