import React, { Component } from 'react';

export default class GridContainerPromotion extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: '15%',
          display: 'grid',
          gridTemplateColumns: '40% 40%',
          gridColumnGap: '10px',
          justifyContent: 'center',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
