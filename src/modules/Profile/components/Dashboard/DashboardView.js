import React from 'react';
import PropTypes from 'prop-types';
import Tasks from './Tasks/Tasks';
import { Doughnut, Bar } from 'react-chartjs-2';
import ProjectStatus from './ProjectStatus/ProjectStatus';
import Timeline from './Timeline/Timeline';
import { left } from 'glamor';

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
    flex: 1,
  },
};

const DashboardView = props => {
  const { projects } = props;
  return (
    <section>
      <div style={{ display: 'flex' }}>
        <div style={style.progress}>
          {projects.map(p => (
            <ProjectStatus projects={p.projects} month={p.month} />
          ))}
        </div>
        <div style={style.progress}>
          <Timeline />
        </div>
        <div style={{ flex: 0.5, padding: 10, margin: 15 }}>
          <h4 style={{ textAlign: 'left' }}>Tarefas Mensais</h4>
          <Doughnut
            redraw
            data={props.data[1]}
            legend={{ position: 'right' }}
          />
          <h4 style={{ textAlign: 'left' }}>Tarefas Semanal</h4>
          <Doughnut
            redraw
            data={props.data[0]}
            legend={{ position: 'right' }}
          />
          <h4 style={{ textAlign: 'left' }}>Evolução</h4>
          <Bar data={props.bar} height={200} />
        </div>
      </div>
    </section>
  );
};

DashboardView.propTypes = {};

export default DashboardView;
