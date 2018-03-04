import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/stories/Profile/Tasks');
}

configure(loadStories, module);
