import React from 'react';
import { connect } from 'dva';
import Work from '../components/Work'

function WorkPage() {
  return (
    <div>
      <Work></Work>
    </div>

  );
}

WorkPage.propTypes = {

};

export default connect()(WorkPage);
