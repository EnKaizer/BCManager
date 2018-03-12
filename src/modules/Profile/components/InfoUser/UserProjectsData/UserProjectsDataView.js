import React from 'react';
import PropTypes from 'prop-types';
import TextNumber from './TextNumber';

const style = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    minWidth: 1000,
    padding: 20,
    fontSize: 25,
  },
};

const UserProjectsDataView = props => {
  return (
    <article style={style.root}>
      <TextNumber number={86} text="projetos" />
      <TextNumber number={15} text="moedas" />
      <TextNumber number={3} text="sprints" />
    </article>
  );
};

UserProjectsDataView.propTypes = {};

export default UserProjectsDataView;
