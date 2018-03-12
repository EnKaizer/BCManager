import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { Button, ButtonGroup } from 'react-bootstrap';

const style = {
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
};

const Tasks = props => {
  const { changeGraphDate, activedButtonDate, data } = props;
  return (
    <article style={style.root}>
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

      <Doughnut
        redraw
        data={data[activedButtonDate]}
        legend={{ position: 'right' }}
      />
    </article>
  );
};

Tasks.propTypes = {
  changeGraphDate: PropTypes.func.isRequired,
  activedButtonDate: PropTypes.number.isRequired,
  data: PropTypes.objectOf(PropTypes.any),
};

export default Tasks;
