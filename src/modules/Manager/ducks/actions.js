/**
 * Created by caiqu on 01/03/2018.
 */
import {Types} from './index';
import axios from 'axios';
export const changeColumn = (task, newId, oldId) => {
    return {type: Types.CHANGE_COLUMN, payload: {task, newId, oldId}}
};

export const getData = () => async dispatch => {
    const payload = await axios.get('https://taskmanager-bt.herokuapp.com/projects');
    dispatch({type: Types.GET_DATA, payload: payload.data.projects})
};

export const changeProject = payload => {
    return {type: Types.SELECTED_PROJECT, payload}
};

export const canDragFunc = payload => {
    console.log('chegou', payload)
    return {type: Types.CAN_DRAG, payload}
};

export const saveTask = data => async dispatch => {
    const payload = await axios.post('https://taskmanager-bt.herokuapp.com/projects', data);
};

export const updateTask = ({projectId, taskId}, data) => async dispatch => {
    const payload = await axios.put(`https://taskmanager-bt.herokuapp.com/projects/${projectId}/tasks/${taskId}`, data, {
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }});
};