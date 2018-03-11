import React from 'react';
import PropTypes from 'prop-types';
import {
  faUser,
  faDatabase,
  faClock,
  faUsers,
} from '@fortawesome/fontawesome-free-solid';
import IconText from './IconText';

const style = {
  root: {
    display: 'flex',
    alignItems: 'center',
    height: 220,
  },
  containerImg: {
    marginRight: 10,
  },
  containerInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 150,
  },
};

const UserDataView = props => {
  return (
    <article style={style.root}>
      <div style={style.containerImg}>
        <img src="avatar.png" width="175px" />
      </div>
      <div style={style.containerInfo}>
        <IconText icon={faUser} text="Beto Silva (desenvolvedor)" />
        <IconText
          icon={faDatabase}
          text="Projeto Atual - Carteira de clientes"
        />
        <IconText icon={faClock} text="Início 12/03/2017 - 1 ano atrás" />
        <IconText icon={faUsers} text="Time Inovação" />
      </div>
    </article>
  );
};

UserDataView.propTypes = {};

export default UserDataView;
