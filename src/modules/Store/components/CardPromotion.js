import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCartPlus from '@fortawesome/fontawesome-free-solid/faCartPlus';
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
        <button className="buttonFooterCard">
              <span><FontAwesomeIcon icon={faCartPlus} /></span>
            </button>
        <span>Descrição do Produto</span>
        </div>
      </div>
    );
  }
}
