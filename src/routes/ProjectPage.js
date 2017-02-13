import React from 'react';
import { connect } from 'dva';
import Project from '../components/Project'

function ProjectPage() {
  return (
    <div>
      <Project></Project>
    </div>

  );
}

ProjectPage.propTypes = {
};

export default connect()(ProjectPage);
