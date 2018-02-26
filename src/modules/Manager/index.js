import React, {Component} from 'react'
import '../../index.css';
import Column from './components/column';
class Manager extends Component {
    render(){
        return(
            <div className="columnContainer">
                <Column/>
                <Column/>
                <Column/>

            </div>
        )
    }
}
export default Manager