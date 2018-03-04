import React, {Component} from 'react'
import '../../index.css';
import Column from './components/column';
import {connect} from 'react-redux';
import {Actions} from './ducks';

class Manager extends Component {
    onChangeTask = (task, id) => {
        let arrayCol = [...this.state.tasks];
        arrayCol.map(col => {
            if(col.id == id)
                col.tasks.push(task)
        })
    };

    render(){
        return(
            <div className="columnContainer">
                {this.props.columnList.map(col => {
                    return <Column id={col.id} onChange={this.props.changeColumn} tasks={col.tasks}/>
                })}
            </div>
        )
    }
}


const mapStateToProps = ({ManagerReducer}) => ({...ManagerReducer});

export default connect(mapStateToProps, {changeColumn: Actions.changeColumn})(Manager)