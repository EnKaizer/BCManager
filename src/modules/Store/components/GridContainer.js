import React, {Component} from 'react'
import '../cardStyle.css'

class GridContainer extends Component {
    constructor(props){
        super(props)
        this.state = {cols: ""}
    }

    componentWillMount = () => {
        let cols = ""
        const {columns} = this.props
        columns.map(col => cols += `${col} `)
        this.setState({cols})
    }

    render(){
        const {cols} = this.state
        const {gridRowGap, gridColumnGap} = this.props
        return(
            <div style={{gridTemplateColumns: cols, gridRowGap: gridRowGap || '340px', gridColumnGap: gridColumnGap || '10px'}} className="containerCard">
                {this.props.children}
            </div>  
        )
    }
}
export default GridContainer