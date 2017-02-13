import React from 'react'
import styles from './Navbar.less'
import { Link } from 'react-router'

const Navbar = ({title}) =>{
  return (
    <div className={styles.navbar}>
        <div className={styles.navbarLeft}><Link to={'/'}><span>﹤</span>返回</Link></div>
        <div className={styles.navbarTitle}>{title}</div>
        <div></div>
    </div>
  )
}
export default Navbar;
