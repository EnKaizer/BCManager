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
import faWindowClose from '@fortawesome/fontawesome-free-solid/faWindowClose'
import EditorModal from './EditorModal';
import ColorSelector from "./ColorSelector";

class ModalPostIt extends Component {
    state = {name: ''};

    componentWillMount = () => {
        this.setState({...this.props});
    };

    handleChange = e => {
        console.log(e);
        this.setState({[e.target.name]: e.target.value})
    };

    render() {
        return (
            <div onKeyDown={(e)=> e.keyCode == 27 ? this.props.close() : ''} style={{position: 'absolute', top: 0, left: 0}}>
                <div
                     style={{zIndex: 3, display: this.props.show ? 'flex' : 'none', opacity: this.props.show ? 1 : 0}}
                     className="modaldialogPostIt">
                    <div style={{
                        background: this.state.color ? this.state.color : this.props.color || 'white',
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
                            <span onClick={this.props.close}>
                                <FontAwesomeIcon icon={faWindowClose}/>
                            </span>
                        </div>
                        <div className="containerBodyModal">
                            <div className="costPostIt">
                                <Input inputStyle={{fontWeight: 600, padding: '10px 10px 0px 5px', color: 'green'}}
                                       labelStyle={{fontSize: 12, fontWeight: 600}}
                                       onChange={this.handleChange}
                                       maxLength="4"
                                       name="cost"
                                       value={this.state.cost}
                                       label="Pontos"/>
                            </div>
                            <div className="editorModalNote">
                                <label className="labelModal">Nota: </label>

                                <div >
                                    <EditorModal name="description" onChange={this.handleChange}
                                                 value={this.props.description}/>
                                </div>
                            </div>
                        </div>
                        <div className="footerModal">
                        <span onClick={() => this.setState({colorSelector: true})}>
                            <FontAwesomeIcon icon={faPaintBrush}/>
                            {this.state.colorSelector &&
                            <div style={{
                                backgroundColor: '#f7f7f7',
                                borderBottomStyle: 'solid',
                                borderTopStyle: 'solid',
                                borderWidth: 0.6
                            }}>
                                <ColorSelector onChange={(color) => this.setState({color})}/>
                            </div>
                            }
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