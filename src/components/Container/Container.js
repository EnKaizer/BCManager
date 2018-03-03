import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import PostIt from '../../modules/Manager/components/postit';
import HTML5Backend from 'react-dnd-html5-backend';
import MouseBackEnd from 'react-dnd-mouse-backend';
import { DragDropContext } from 'react-dnd';
import { Link } from 'react-router-dom';

class Container extends Component {
  state = { headerZ: 0, minHeader: false };
  componentDidMount = () => {
    const elem = ReactDOM.findDOMNode(this.elementToScroll);
    if (window.addEventListener) {
      window.addEventListener('scroll', this.headerLoad);
      ReactDOM.findDOMNode(this.elementToScroll2).addEventListener(
        'scroll',
        this.headerLoad,
      );
      ReactDOM.findDOMNode(this.elementToScroll3).addEventListener(
        'scroll',
        this.headerLoad,
      );
    } else {
      ReactDOM.findDOMNode(this.elementToScroll1).attachEvent(
        'on' + 'scroll',
        this.headerLoad,
      );
      ReactDOM.findDOMNode(this.elementToScroll2).attachEvent(
        'on' + 'scroll',
        this.headerLoad,
      );
      ReactDOM.findDOMNode(this.elementToScroll3).attachEvent(
        'on' + 'scroll',
        this.headerLoad,
      );
    }
  };

  componentWillUnmount() {
    const elem = ReactDOM.findDOMNode(this.elementToScroll);
    //elem.removeEventListener('scroll', this.headerLoad, true);
  }

  headerLoad = () => {
    if (window.scrollY >= 670) {
      this.setState({ minHeader: true }, () => {
        $('#header').css({
          'z-index': 2,
          'line-height': '50px',
          height: '100px',
          position: 'fixed',
        });
      });
    }
    const windowHeight = $(window).height(),
      heightDocument = windowHeight + $('.content').height() - 20;

    // Definindo o tamanho dos elementos header e conteúdo
    if (window.scrollY < 670) {
      this.setState({ minHeader: false }, () => {
        $('header').css({
          'z-index': 0,
          height: windowHeight + 'px',
          'line-height': windowHeight + 'px',
        });

        $('.wrapper-parallax').css({
          'margin-top': windowHeight + 'px',
        });
      });
    }
  };

  render() {
    return (
      <div
        onScroll={() => console.log('oi')}
        ref={element => (this.elementToScroll1 = element)}
        className="App"
      >
        <div
          onScroll={() => console.log('oi')}
          ref={element => (this.elementToScroll2 = element)}
          id="scroll-animate"
        >
          <div
            onScroll={() => console.log('oi')}
            ref={element => (this.elementToScroll3 = element)}
            id="scroll-animate-main"
          >
            <div className="wrapper-parallax">
              <header style={{ zIndex: 0 }} id="header">
                {this.state.minHeader ? (
                  <div style={{ paddingBottom: 10, color: 'white' }}>
                    <Link to={this.props.to}>{this.props.link}</Link>
                  </div>
                ) : (
                  <h1>Header</h1>
                )}
              </header>
              <div>oix</div>
              <section className="content">
                {this.props.spacer ? (
                  <div>
                    <div className="spacer">&nbsp;</div> {this.props.children}
                  </div>
                ) : (
                  <div>{this.props.children}</div>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DragDropContext(MouseBackEnd, HTML5Backend)(Container);
