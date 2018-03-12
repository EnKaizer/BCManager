import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCartPlus from '@fortawesome/fontawesome-free-solid/faCartPlus';
import $ from 'jquery';
import './UnlockAchievement.css';

export default class UnlockAchievement extends Component {
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
    setTimeout(() => {
      favDialog.close();
      this.props.closeAchievement();
    }, 400);
  };

  render() {
    return (
      <dialog onClick={() => this.closeDialog()} id="achieviment">
        <div className="containerAlertAchievement">
          <div className="containerBodyTop">
            <div className="containerImg">
              <img
                className="img"
                src="https://theliteracyexperiments.files.wordpress.com/2015/08/icon-leaderboard.png"
              />
            </div>
            <div className="containerDescription">
              <strong>Conquista Desbloqueada</strong>
              <span className="textDescriptionSpan">
                Parabéns pela primeira compra em nossa loja.
              </span>
              <span className="textPointsSpan">1.500 Pt</span>
            </div>
          </div>
          <div className="containerBodyBottom">
            <button className="button">
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        </div>
      </dialog>
    );
  }
}
