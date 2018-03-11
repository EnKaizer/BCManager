import React from 'react';
import { Dashboard, InfoUser } from '../';

const ProfileView = props => {
  return (
    <section>
      <InfoUser />
      <Dashboard />
    </section>
  );
};

ProfileView.propTypes = {};

export default ProfileView;
