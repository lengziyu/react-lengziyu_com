import React from 'react'
import styles from './ProjectItem.less'

const ProjectItem = (data) =>{
  const divImg = {
    backgroundImage: 'url(' + data.data.imgUrl + ')',
  }
  console.log(divImg)
  return(
    <div className={styles.section}>
      <div className={styles.img}></div>
      <div className={styles.name}>{ data.data.name }</div>
      <div className={styles.detail}>{ data.data.detail }</div>
      <div className={styles.url} ><a href={ data.data.url }>{ data.data.url }</a></div>
      <div className={styles.date}>开发时间：{ data.data.date }</div>
      <div className={styles.skillTags}>
        {
          data.data.skillTags.map( item =>
            <span key={item}>{item}</span>
        )}
      </div>
    </div>
  )
}
export default ProjectItem;
