import React, {Component, Fragment} from 'react'
import '../../index.css';
import Column from './components/column';
import {ModalPostIt} from '../../components';
import {connect} from 'react-redux';
import {Actions} from './ducks';

class Manager extends Component {
    componentWillMount = async () => {
        await this.props.getData();

    };

    onChangeTask = (task, id) => {
        let arrayCol = [...this.state.tasks];
        arrayCol.map(col => {
            if (col.id == id)
                col.tasks.push(task)
        })
    };

    handleChange = (e) => {
        let project = this.props.projectList.filter(prj => prj.id === e.target.value);
        this.props.changeProject(project[0]);
    };

    render() {

        return (
            <Fragment>
                <ModalPostIt/>
                <select onChange={this.handleChange} value={this.props.projectSelected.id}>
                    {this.props.projectList.map(prj =>
                        <option value={prj.id}>{prj.name}</option>)}
                </select>
                <div className="columnContainer">
                    {this.props.projectSelected.boards && this.props.projectSelected.boards.map(col => {
                        return <Column id={col.id} onChange={this.props.changeColumn} name={col.name}
                                       tasks={col.tasks}/>
                    })}
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = ({ManagerReducer}) => ({...ManagerReducer});

export default connect(mapStateToProps, {...Actions})(Manager)