import React, {Component, Fragment} from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import PostIt from '../../modules/Manager/components/postit';
import HTML5Backend from 'react-dnd-html5-backend';
import MouseBackEnd from 'react-dnd-mouse-backend';
import {DragDropContext} from 'react-dnd';
import {Link} from 'react-router-dom';
import {Profile} from '../../../src/modules/Profile/components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowAltCircleDown from '@fortawesome/fontawesome-free-solid/faArrowAltCircleDown';
import faArrowAltCircleUp from '@fortawesome/fontawesome-free-solid/faArrowAltCircleUp';
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';

class Container extends Component {
    state = {headerZ: 0, minHeader: true};
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

    shouldComponentUpdate = (nxtProps, nxtState) => {
        if (nxtState.minHeader == this.state.minHeader) return false;
        else return true;
    };

    headerLoad = () => {
        if (window.scrollY >= 610) {
            this.setState({minHeader: true}, () => {
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
        if (window.scrollY < 610) {
            this.setState({minHeader: false}, () => {
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

    scrollToView = () => {
        if (!this.state.minHeader) {
            this.setState({minHeader: true});
            this.elementToScroll4.scrollIntoView({behavior: 'smooth'});
        } else if (this.state.minHeader) {
            this.setState({minHeader: false});
            this.elementToScroll2.scrollIntoView({behavior: 'smooth'});
        }
    };

    render() {
        console.log(this.props);
        return (
            <div onScroll={this.headerLoad} ref={element => (this.elementToScroll1 = element)} className="App">
                <div className="fixedBtn">
                    <AnchorLink href="#content"><FontAwesomeIcon icon={faArrowAltCircleDown}/></AnchorLink>
                </div>
                <Link to="/store">
                    <div className="fixedBtn">
                        <a style={{backgroundColor: 'red', top: 70}} href="#"><FontAwesomeIcon
                            icon={faShoppingCart}/></a>
                    </div>
                </Link>
                <div
                    ref={element => (this.elementToScroll2 = element)}
                    id="scroll-animate"
                >
                    <div
                        ref={element => (this.elementToScroll3 = element)}
                        id="scroll-animate-main"
                    >
                        {/*<div id="header" ref={element => (this.elementToScroll3 = element)}>*/}
                        <Profile />
                        {/*</div>*/}
                        <div id="content" ref={element => (this.elementToScroll4 = element)} className="content">
                            {this.props.spacer ? (
                                <Fragment>
                                    <div className="fixedBtn">
                                        <AnchorLink href="#scroll-animate-main"><FontAwesomeIcon
                                            icon={faArrowAltCircleUp}/></AnchorLink>
                                    </div>
                                    <Link to="/store">
                                        <div className="fixedBtn">
                                            <a style={{backgroundColor: 'red', top: 70}} href="#"><FontAwesomeIcon
                                                icon={faShoppingCart}/></a>
                                        </div>
                                    </Link>
                                    <div>{this.props.children}</div>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <div className="fixedBtn">
                                        <AnchorLink href="#scroll-animate-main"><FontAwesomeIcon
                                            icon={faArrowAltCircleUp}/></AnchorLink>
                                    </div>
                                    <Link to="/store">
                                        <div className="fixedBtn">
                                            <a style={{backgroundColor: 'red', top: 70}} href="#"><FontAwesomeIcon
                                                icon={faShoppingCart}/></a>
                                        </div>
                                    </Link>
                                    <div>{this.props.children}</div>
                                </Fragment>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default DragDropContext(MouseBackEnd, HTML5Backend)(Container);
