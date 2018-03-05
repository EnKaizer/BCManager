import React, { Component } from 'react';
import CardPromotion from './CardPromotion';

export default class GridContainerPromotion extends Component {
  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '40% 40%',
          gridColumnGap: '10px',
          justifyContent: 'center',
        }}
      >
        <CardPromotion img="http://tedium.imgix.net/2017/03/0322_purple.jpg" />
        <CardPromotion img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX//wCKxvRFAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" />
      </div>
    );
  }
}
