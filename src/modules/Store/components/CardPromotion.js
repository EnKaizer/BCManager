import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCartPlus from '@fortawesome/fontawesome-free-solid/faCartPlus';
import '../cardPromotionStyle.css';

export default class CardPromotion extends Component {
  verifyPoints = () => {
    const { points } = this.props;
    const pointValidate = parseInt(points.split('points')[0].replace('.', ''));
  };
  render() {
    const { img, title, subtitle, points } = this.props;
    return (
      <div className="cardPromotion">
        <div
          style={{
            height: '100%',
            display: 'flex',
          }}
        >
          <img
            className="cardPromotionImg"
            src={img || 'http://tedium.imgix.net/2017/03/0322_purple.jpg'}
          />
        </div>
        <div className="containerFooter">
          <strong>{title}</strong>
          <p style={{ margin: '-10px 0 0px' }} />
          <span style={{ fontSize: '10pt' }}>{subtitle}</span>
          <div className="containerFooterBody">
            <button
              className="buttonFooterCard"
              onClick={() => this.verifyPoints()}
            >
              <span>
                <FontAwesomeIcon icon={faCartPlus} />
              </span>
            </button>
            <strong style={{ float: 'right', color: '#ee2c2c' }}>
              {points}
            </strong>
          </div>
        </div>
      </div>
    );
  }
}
