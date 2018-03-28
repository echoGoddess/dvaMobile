import React from 'react';
import { connect } from 'dva';
import styles from './Live.css';

function Live() {
  return (
    <div className={styles.normal}>
      Route Component: Live
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Live);
