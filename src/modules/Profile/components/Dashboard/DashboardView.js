import React from 'react';
import PropTypes from 'prop-types';
import Tasks from './Tasks/Tasks';
import ProjectStatus from './ProjectStatus/ProjectStatus';

const style = {
  root: {
    display: 'flex',
  },
  tasks: {
    padding: 15,
  },
  progress: {
    display: 'flex',
    margin: 15,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
};

const DashboardView = props => {
  const { projects } = props;
  return (
    <section>
      <div style={style.root}>
        <div style={style.tasks}>
          <Tasks {...props} />
        </div>
        <div style={style.tasks}>
          <Tasks {...props} />
        </div>
        <div style={style.tasks}>
          <Tasks {...props} />
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={style.progress}>
          {projects.map(p => (
            <ProjectStatus projects={p.projects} month={p.month} />
          ))}
        </div>
        <div style={style.progress}>
          {projects.map(p => (
            <ProjectStatus projects={p.projects} month={p.month} />
          ))}
        </div>
      </div>
    </section>
  );
};

DashboardView.propTypes = {};

export default DashboardView;
