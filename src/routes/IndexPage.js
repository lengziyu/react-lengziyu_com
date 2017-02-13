import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Home from '../components/Home'

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Home></Home>
    </div>

  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
