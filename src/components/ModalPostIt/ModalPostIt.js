/**
 * Created by caiqu on 05/03/2018.
 */
import React, {Component} from 'react';
import './ModalPostIt.css';
import Input from "../Input/Input";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPaintBrush from '@fortawesome/fontawesome-free-solid/faPaintBrush'
import faUserPlus from '@fortawesome/fontawesome-free-solid/faUserPlus'
import faClipboardCheck from '@fortawesome/fontawesome-free-solid/faClipboardCheck'
import ReactDOM from 'react-dom';

class ModalPostIt extends Component {
    state = {name: ''};

    componentWillMount = () => {
        this.setState({...this.props});
    };

    handleChange = e => {
        console.log(e.target.name, e.target.value, 'bateu');
        this.setState({[e.target.name]: e.target.value})
    };

    emitChange = (e) => {
        var html = ReactDOM.findDOMNode(this.description).innerHTML;
        console.log(html)
        if (this.handleChange) {

            this.handleChange({
                target: {
                    value: html,
                    name: 'description'
                }
            });
        }
    };

    render() {
        return (
            <div style={{position: 'absolute', top: 0, left: 0}}>
                <div onClick={this.props.close}
                     style={{zIndex: 3, display: this.props.show ? 'flex' : 'none', opacity: this.props.show ? 1 : 0}}
                     className="modaldialogPostIt">

                    <div style={{
                        background: this.props.color || 'white',
                        opacity: this.props.show ? 1 : 0,
                        zIndex: 4000
                    }}
                         className="modalContent">
                        <div className="headerModal">
                            <Input inputStyle={{fontWeight: 600, padding: '10px 10px 0px 5px'}}
                                   labelStyle={{fontSize: 22, fontWeight: 600}}
                                   onChange={this.handleChange}
                                   name="name"
                                   value={this.state.name}
                                   label="Titulo"/>
                        </div>
                        <label className="labelModal">Nota: </label>
                        <div contenteditable="true" tabindex="0" ref={element => this.description = element} aria-multiline="true" onInput={this.emitChange}
                             onChange={this.handleChange} value={this.state.description} name="description" role="textbox" aria-label="Nota"
                             className="textAreaModal" spellcheck="true">{this.state.description}
                        </div>
                        <div className="footerModal">
                        <span>
                            <FontAwesomeIcon icon={faPaintBrush}/>
                        </span>
                            <span>
                            <FontAwesomeIcon icon={faUserPlus}/>
                        </span>
                            <span>
                            <FontAwesomeIcon icon={faClipboardCheck}/>
                        </span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ModalPostIt;