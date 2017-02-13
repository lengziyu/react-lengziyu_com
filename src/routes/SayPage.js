import React from 'react';
import { connect } from 'dva';
import Say from '../components/Say'

function SayPage() {
  return (
    <div>
      <Say></Say>
    </div>

  );
}

SayPage.propTypes = {
};

export default connect()(SayPage);
