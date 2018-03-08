/**
 * Created by caiqu on 08/03/2018.
 */
import React, {Component} from 'react';
import './ColorSelector.css';
class ColorSelector extends Component {
    render() {
        //F4511E laranja FFB300 ambar #7CB342 lima #00897B azul esverdeado #3949AB indigo
        return (<div>
            <label onClick={() => this.props.onChange('#F4511E')} class="orange">
                <input type="radio" className="colorSelector" name="color" value="orange"/>
                <div class="layer"></div>
                <div class="button"><span></span></div>
            </label>

            <label onClick={() => this.props.onChange('#FFB300')} class="amber">
                <input type="radio" name="color" value="amber" className="colorSelector"/>
                <div class="layer"></div>
                <div class="button"><span></span></div>
            </label>

            <label onClick={() => this.props.onChange('#7CB342')} class="lime">
                <input className="colorSelector" type="radio" name="color" value="lime"/>
                <div class="layer"></div>
                <div class="button"><span></span></div>
            </label>

            <label onClick={() => this.props.onChange('#00897B')} class="teal">
                <input className="colorSelector" type="radio" name="color" value="teal"/>
                <div class="layer"></div>
                <div class="button"><span></span></div>
            </label>

            <label class="blue">
                <input type="radio" name="color" onClick={() => this.props.onChange('#2196F3')}
                       className="colorSelector" value="blue"/>
                <div class="layer"></div>
                <div class="button"><span></span></div>
            </label>

            <label class="indigo">
                <input type="radio" name="color" value="indigo" onClick={() => this.props.onChange('#3949AB')}
                       className="colorSelector"/>
                <div class="layer"></div>
                <div class="button"><span></span></div>
            </label>
        </div>)
    }
}
export default ColorSelector;