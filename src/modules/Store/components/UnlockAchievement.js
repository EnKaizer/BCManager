import React, { Component } from 'react';

export default class UnlockAchievement extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
          height: '100px',
          backgroundColor: '#EEE5DE',
          borderRadius: '10px',
          position: 'fixed',
          top: '110px',
          right: '2px',
          zIndex: 2,
          padding: '2px',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '28%',
              marginLeft: '2px',
              marginTop: '2px',
              borderTopLeftRadius: '10px',
              borderBottomLeftRadius: '10px',
            }}
          >
            <img
              style={{
                maxWidth: '60px',
                height: 'auto',
                alignSelf: 'baseline',
              }}
              src="https://theliteracyexperiments.files.wordpress.com/2015/08/icon-leaderboard.png"
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <strong
              style={{
                width: '100%',
                fontSize: '11pt',
              }}
            >
              Conquista Desbloqueada
            </strong>
            <span style={{ fontSize: '9pt', color: '#5f5e5e' }}>
              Parabéns pela primeira compra em nossa loja.
            </span>
            <span
              style={{
                fontSize: '14pt',
                fontWeight: 'bold',
                color: 'green',
              }}
            >
              1.500 Pt
            </span>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            marginLeft: '5px',
            marginTop: '5px',
            marginBottom: '5px',
          }}
        >
          <button>button</button>
        </div>
      </div>
    );
  }
}
