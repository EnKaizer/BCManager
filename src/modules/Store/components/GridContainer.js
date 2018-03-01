import React, {Component} from 'react'
import '../cardStyle.css'

class GridContainer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="containerCard">
                {this.props.children}
            </div>  
        )
    }
}
export default GridContainer