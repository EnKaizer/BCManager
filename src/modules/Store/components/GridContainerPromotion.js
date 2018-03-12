import React, { Component } from 'react';

export default class GridContainerPromotion extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: '5vh',
          display: 'grid',
          gridTemplateColumns: '35% 35%',
          gridColumnGap: '10px',
          justifyContent: 'center',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
