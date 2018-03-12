import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCartPlus from '@fortawesome/fontawesome-free-solid/faCartPlus';
import '../cardStyle.css';
import Alert from '../../../components';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  verifyPoints = () => {
    const { points } = this.props;
    const pointValidate = parseInt(points.split('points')[0].replace('.', ''));
  };

  render() {
    const {
      img,
      points,
      title,
      description,
      fontSize,
      width,
      backgroundColor,
    } = this.props;
    return (
      <div className="container">
        <div className="card-profile">
          <div
            style={{ backgroundColor: backgroundColor }}
            className="card-profile_visual"
          >
            <img src={img} alt={!img && 'logo'} />
          </div>
          <div className="card-profile_user-infos">
            <button className="buttonCard" onClick={() => this.verifyPoints()}>
              <span
                style={{
                  fontSize: '30px',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <FontAwesomeIcon icon={faCartPlus} />
              </span>
              <span>{points || 0}&nbsp;Pt</span>
            </button>
          </div>
          <div className="card-profile_user-stats">
            <div style={{ width: width || '100%' }}>
              <span className="product">{title || <i>Sem título</i>}</span>
            </div>
            <div className="stats-holder">
              <div className="user-stats">
                <strong className="strongCard">
                  {description || <i>Sem Descrição</i>}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
