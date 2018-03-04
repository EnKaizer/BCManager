import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Tasks } from '../../../src/modules/Profile/components';
import data from '../../../src/modules/Profile/utils/data/tasks/data';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Tasks', module)
  .add('Mensal', () => <Tasks data={data} activedButtonDate={0} />)
  .add('Semanal', () => <Tasks data={data} activedButtonDate={1} />);
