import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCartPlus from '@fortawesome/fontawesome-free-solid/faCartPlus';
import $ from 'jquery';
import './UnlockAchievement.css';

export default class UnlockAchievement extends Component {

   componentDidMount = () => {
       $('.containerAlertAchievement').removeClass('closeUnlock');
   };

  componentWillReceiveProps = nxtProps => {
    const favDialog = document.getElementById('achieviment');
    if (
      nxtProps.Achievement &&
      this.props.Achievement != nxtProps.Achievement
    ) {
      favDialog.showModal();
    } else if (
      !nxtProps.Achievement &&
      this.props.Achievement != nxtProps.Achievement
    ) {
      favDialog.close();
      nxtProps.closeAchievement();
    }
  };

  closeDialog = () => {
    const favDialog = document.getElementById('achieviment');
    $('.containerAlertAchievement').addClass('closeUnlock');
    setTimeout(() => {
        $('.containerAlertAchievement').removeClass('closeUnlock');
      favDialog.close();
      this.props.closeAchievement();
    }, 400);
  };

  render() {
    const { img, title, description, points } = this.props;
    return (
      <dialog onClick={() => this.closeDialog()} id="achieviment">
        <div className="containerAlertAchievement">
          <div className="containerBodyTop">
            <div className="containerImg">
              <img className="img" src={img} />
            </div>
            <div className="containerDescription">
              <strong>{title}</strong>
              <span className="textDescriptionSpan">{description}</span>
              <span className="textPointsSpan">{points}</span>
            </div>
          </div>
          <div className="containerBodyBottom">
            <Link style={{ outline: 'none', width: '22%' }} to="/store">
              <button className="button">
                <FontAwesomeIcon icon={faCartPlus} />
              </button>
            </Link>
          </div>
        </div>
      </dialog>
    );
  }
}
