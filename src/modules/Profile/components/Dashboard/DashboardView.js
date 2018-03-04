import React from 'react';
import PropTypes from 'prop-types';
import Tasks from './Tasks/Tasks';

const style = {
  root: {
    display: 'flex',
  },
  tasks: {
    flex: 1,
  },
};

const DashboardView = props => {
  return (
    <section style={style.root}>
      <div style={style.tasks}>
        <Tasks {...props} />
      </div>
      <div style={style.tasks}>
        <Tasks {...props} />
      </div>
    </section>
  );
};

DashboardView.propTypes = {};

export default DashboardView;
