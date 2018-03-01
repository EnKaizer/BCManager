import React, {Component} from 'react'
import '../../index.css';
import Column from './components/column';
import {connect} from 'react-redux';
import {Actions} from './ducks';

const props = [{
    id: 1,
    tasks: [{
        id:1,
        text: 1
    }]
},
    {
        id: 2,
        tasks: [{
            id:2,
            text: 1
        }]
    },
    {
        id: 3,
        tasks: [{
            id:3,
            text: 1
        }]
    }];

class Manager extends Component {

    state={
        col: props
    };

    onChangeTask = (task, id) => {
        let arrayCol = [...this.state.tasks];
        arrayCol.map(col => {
            if(col.id == id)
                col.tasks.push(task)
        })
    };

    render(){
        console.log(this.props);
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