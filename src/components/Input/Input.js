/**
 * Created by caiqu on 04/03/2018.
 */
import React, {Component} from 'react';
import './Input.css';
class Input extends Component {
    render() {
        return (
            <div class="group">
                <input style={this.props.inputStyle} onChange={this.props.onChange}
                       value={this.props.value}
                       maxLength={this.props.maxLength}
                       name={this.props.name}
                       type={this.props.type} required={this.props.required}/>
                <span class="highlight"></span>
                <span style={this.props.styleLightBar} class="bar"></span>
                <label style={this.props.labelStyle} className="inputLabel">{this.props.label}</label>
            </div>
        )
    }
}

export default Input
