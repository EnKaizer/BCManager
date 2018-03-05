import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { Button, ButtonGroup } from 'react-bootstrap';

const style = {
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    border: '1px solid #ccc',
  },
  title: {
    color: 'white',
    backgroundColor: '#3b72b0',
    fontSize: 25,
    padding: '3px 0px 3px 15px',
  },
};

const Tasks = props => {
  const { changeGraphDate, activedButtonDate, data } = props;
  return (
    <article style={style.root}>
      <div style={style.title}>Tarefas</div>
      <div>
        <ButtonGroup justified>
          <Button
            href="#"
            name="month"
            active={activedButtonDate === 0}
            onClick={changeGraphDate}
          >
            Mensal
          </Button>
          <Button
            href="#"
            name="week"
            active={activedButtonDate === 1}
            onClick={changeGraphDate}
          >
            Semanal
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <Doughnut
          redraw
          data={data[activedButtonDate]}
          legend={{ position: 'right' }}
        />
      </div>
    </article>
  );
};

Tasks.propTypes = {
  changeGraphDate: PropTypes.func.isRequired,
  activedButtonDate: PropTypes.number.isRequired,
  data: PropTypes.objectOf(PropTypes.any),
};

export default Tasks;
