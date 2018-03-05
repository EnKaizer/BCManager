import React, { Component } from 'react';

export default class CardPromotion extends Component {
  render() {
    const { img } = this.props;
    return (
      <div
        style={{
          width: '100%',
          height: '120px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            overflow: 'hidden',
            position: 'relative',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
          }}
        >
          <img
            style={{
              maxWidth: '150px',
              height: '170px',
              overflow: 'hidden',
              position: 'relative',
            }}
            src={img || 'http://tedium.imgix.net/2017/03/0322_purple.jpg'}
          />
        </div>
      </div>
    );
  }
}
