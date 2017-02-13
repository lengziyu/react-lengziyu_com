import React from 'react';
import { connect } from 'dva';
import Me from '../components/Me'

function MePage() {
  return (
    <div>
      <Me></Me>
    </div>

  );
}

MePage.propTypes = {
};

export default connect()(MePage);
