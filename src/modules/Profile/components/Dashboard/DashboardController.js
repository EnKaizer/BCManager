import React, { Component } from 'react';
import DashboardView from './DashboardView';
import data from '../../utils/data/tasks/data';
import projects from '../../utils/data/projects/projects';

class DashboardController extends Component {
  constructor(props) {
    super(props);
    this.state = { activedButtonDate: 0 };
  }

  changeGraphDate = ({ target }) => {
    const { name } = target;
    if (name === 'month') {
      this.setState({ activedButtonDate: 0 });
    } else this.setState({ activedButtonDate: 1 });
  };

  render() {
    return (
      <DashboardView
        {...this.state}
        changeGraphDate={this.changeGraphDate}
        data={data}
        projects={projects}
      />
    );
  }
}

export default DashboardController;
