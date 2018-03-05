import React from 'react';
import PropTypes from 'prop-types';
import Tasks from './Tasks/Tasks';
import ProjectStatus from './ProjectStatus/ProjectStatus';

const style = {
  root: {
    display: 'flex',
  },
  tasks: {
    flex: 1,
  },
  progress: {
    flex: 1,
    padding: 30,
    backgroundColor: 'white',
  },
};

const DashboardView = props => {
  const { projects } = props;
  return (
    <section style={style.root}>
      <div style={style.tasks}>
        <Tasks {...props} />
      </div>
      <div style={style.progress}>
        {projects.map(p => (
          <ProjectStatus projects={p.projects} month={p.month} />
        ))}
      </div>
    </section>
  );
};

DashboardView.propTypes = {};

export default DashboardView;
