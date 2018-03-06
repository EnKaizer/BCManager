/**
 * Created by caiqu on 04/03/2018.
 */
import React, {Component} from 'react';
import './Input.css';
class Input extends Component {
    render() {
        return (
            <div class="group">
                <input onChange={this.props.onChange} type={this.props.type} required={this.props.required}/>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label className="inputLabel">{this.props.label}</label>
            </div>
        )
    }
}

export default Input
