import React from 'react';
import PropTypes from 'prop-types';

function verifyIfIsDoneProgressOrStopped(param) {
  if (param === 100) {
    return { status: 'success', label: 'Feito' };
  }
  if (param === 0) {
    return { status: 'stopped', label: 'Parado' };
  }

  return { status: 'progress', label: 'Trabalhando' };
}

function ProjectStatus(props) {
  const style = {
    root: {
      fontSize: '16px',
      color: '#62627d',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 15,
      width: '100%',
    },
    row: {
      display: 'flex',
      height: '50px',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: '3px 0',
      borderLeftWidth: '10px',
      borderLeftColor: 'white',
      borderLeftStyle: 'solid',
    },
    rowItems: {
      borderLeftColor: 'darkorchid',
    },
    columnMonth: {
      width: '28%',
    },
    column: {
      margin: 0.7,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      width: '12%',
      justifyContent: 'center',
      backgroundColor: 'rgb(233, 234, 236)',
    },
    timeline: {},
    success: {
      backgroundColor: '#60cf73',
      color: 'white',
    },
    progress: {
      backgroundColor: '#fbab3d',
      color: 'white',
    },
    stopped: {
      backgroundColor: '#e54758',
      color: 'white',
    },
  };

  const { projects, month } = props;

  return (
    <table style={style.root}>
      <tr style={style.row}>
        <th
          style={{
            ...style.column,
            ...style.columnMonth,
            backgroundColor: 'none',
            fontSize: 32,
            color: 'orchid',
          }}
        >
          {month}
        </th>
        <th style={{ ...style.column, backgroundColor: 'none' }}>Resp</th>
        <th style={{ ...style.column, backgroundColor: 'none' }}>Design</th>
        <th style={{ ...style.column, backgroundColor: 'none' }}>R&D</th>
        <th style={{ ...style.column, backgroundColor: 'none' }}>Teste</th>
        <th style={{ ...style.column, backgroundColor: 'none' }}>Lançamento</th>
        <th style={{ ...style.column, backgroundColor: 'none' }}>Timeline</th>
      </tr>

      {projects.map(project => {
        let { design, dev, test, launch } = project;
        design = verifyIfIsDoneProgressOrStopped(design);
        dev = verifyIfIsDoneProgressOrStopped(dev);
        test = verifyIfIsDoneProgressOrStopped(test);
        launch = verifyIfIsDoneProgressOrStopped(launch);
        return (
          <tr style={{ ...style.row, ...style.rowItems }}>
            <td style={{ ...style.column, ...style.columnMonth }}>
              {project.name}
            </td>
            <td style={style.column}>{project.responsible}</td>
            <td style={{ ...style.column, ...style[design.status] }}>
              {design.label}
            </td>
            <td style={{ ...style.column, ...style[dev.status] }}>
              {dev.label}
            </td>
            <td style={{ ...style.column, ...style[test.status] }}>
              {test.label}
            </td>
            <td style={{ ...style.column, ...style[launch.status] }}>
              {launch.label}
            </td>
            <td style={{ ...style.column, ...style.timeline, padding: '10px' }}>
              <progress value={project.timeline} max={100} />
            </td>
          </tr>
        );
      })}
    </table>
  );
}

ProjectStatus.propTypes = {};

export default ProjectStatus;
