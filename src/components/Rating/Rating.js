/**
 * Created by caiqu on 01/03/2018.
 */
import React, {Component} from 'react';
import './Rating.css';
class Rating extends Component {

    state={rate: 0};

    componentWillMount = () => {
      this.setState({rate : this.props.rate})
    };

    handleClick = (e) => {
        if(this.props.readOnly) return;
        this.setState({rate: (e.target.id == 1 && this.state.rate == 1) ? 0 : e.target.id})
    };

    render() {
        return (
            <div className="containerRanting">
                <div onClick={this.handleClick} id="1" className={`rating ${this.state.rate >= 1 ? 'active' : 'inactive'}`}/>
                <div onClick={this.handleClick} id="2" className={`rating ${this.state.rate >= 2 ? 'active' : 'inactive'}`}/>
                <div onClick={this.handleClick} id="3" className={`rating ${this.state.rate >= 3 ? 'active' : 'inactive'}`}/>
                <div onClick={this.handleClick} id="4" className={`rating ${this.state.rate >= 4 ? 'active' : 'inactive'}`}/>
                <div onClick={this.handleClick} id="5" className={`rating ${this.state.rate == 5 ? 'active' : 'inactive'}`}/>
            </div>
        )
    }
}

export default Rating;