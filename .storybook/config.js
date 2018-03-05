import { configure } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';

function loadStories() {
  require('../src/stories');
  require('../src/stories/Profile/Tasks');
  require('../src/stories/Profile/ProjectStatus');
}

configure(loadStories, module);
