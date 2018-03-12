/**
 * Created by caiqu on 09/03/2018.
 */
import React, {Component, Fragment} from 'react';
import Input from '../Input/Input';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import './CheckList.css';
import _ from 'underscore';
class CheckList extends Component {
    state = {
        showAddForm: false, checkList: [], newSubTask: {
            "id": _.uniqueId('check'),
            "name": "",
            "evaluate": "",
            "cost": 0,
            "status_bonus": "",
            "finished": false,
        }
    };

    componentDidMount = () => {
        this.setState({
            checkList: [...this.props.list]
        })
    };

    isFinished = (id) => {
        let newCheckList = [...this.state.checkList];
        newCheckList.map(tasks => {
            if (tasks.id == id)
                tasks.finished = !tasks.finished
        });

        this.setState({checkList: newCheckList});
    };

    render() {
        console.log(this.state.newSubTask.name);
        return (
            <div className="checkListContainer">
                <div onClick={() => this.setState({showAddForm: !this.state.showAddForm})}>
                    <span>Adicionar Tarefa</span>
                </div>
                {this.state.showAddForm &&
                <div className="formNewTask">
                    <Input
                        value={this.state.newSubTask.name}
                        onChange={(e) => {
                            this.setState({newSubTask: {...this.state.newSubTask, name: e.target.value}})
                        }} label="Task"/>
                    <span style={{height: 15}} width={50} height={50}><FontAwesomeIcon onClick={() => {
                        this.setState({
                            checkList: [...this.state.checkList, this.state.newSubTask], newSubTask: {
                                "name": "",
                                "id": _.uniqueId('check'),
                                "evaluate": "",
                                "cost": 0,
                                "status_bonus": "",
                                "finished": false,
                            }
                        })
                    }} icon={faPlus}/></span>
                </div>
                }
                <div className="listContainer">
                    <div className="listSubTask">
                        {this.state.checkList.map(sub => {
                            return <div onClick={() => this.isFinished(sub.id)}>

                                <span className="subtask finished">{sub.name}</span>
                                {sub.finished &&
                                <Fragment>
                                    <span style={this.props.styleLightBar} class="bar"></span>
                                </Fragment>
                                }
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckList;