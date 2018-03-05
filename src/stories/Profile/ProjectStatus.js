import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ProjectStatus } from '../../../src/modules/Profile/components';
import data from '../../../src/modules/Profile/utils/data/projects/projects';

storiesOf('ProjectStatus', module)
  .add('Somente 1 mes', () => (
    <ProjectStatus projects={data[0].projects} month={data[0].month} />
  ))
  .add('Todos os meses', () => {
    {
      return data.map(p => (
        <ProjectStatus projects={p.projects} month={p.month} />
      ));
    }
  });
