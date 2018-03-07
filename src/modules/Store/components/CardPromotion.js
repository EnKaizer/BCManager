import React, { Component } from 'react';
import '../cardPromotionStyle.css';

export default class CardPromotion extends Component {
  render() {
    const { img } = this.props;
    return (
      <div className="cardPromotion">
        <div
          style={{
            height: '100%',
            display: 'flex',
          }}
        >
          <img
            style={{
              maxWidth: '150px',
              height: '170px',
              overflow: 'hidden',
            }}
            src={img || 'http://tedium.imgix.net/2017/03/0322_purple.jpg'}
          />
          <span>hahaha</span>
        </div>
        <div className="containerFooter">
          <a
            href="#"
            style={{
              display: 'flex',
              marginLeft: '4%',
              textDecoration: 'none',
            }}
          >
            <span>Comprar</span>
          </a>
        </div>
      </div>
    );
  }
}
