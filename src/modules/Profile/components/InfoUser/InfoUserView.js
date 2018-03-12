import React from 'react';
import PropTypes from 'prop-types';
import UserData from './UserData/UserDataController';
import UserEvolution from './UserEvolution/UserEvolutionController';
import UserProjectsData from './UserProjectsData/UserProjectsDataController';

const style = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  firstDiv: {
    display: 'flex',
    flex: 1,
  },
};

const InfoUserView = props => {
  return (
    <section style={style.root}>
      <article style={style.firstDiv}>
        <div>
          <UserData />
        </div>
        <div style={{ height: 264, width: 1000 }}>
          <UserEvolution />
        </div>
      </article>
      <article>
        <UserProjectsData />
      </article>
    </section>
  );
};

InfoUserView.propTypes = {};

export default InfoUserView;
