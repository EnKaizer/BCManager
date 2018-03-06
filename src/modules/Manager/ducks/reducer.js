/**
 * Created by caiqu on 01/03/2018.
 */
import {Types} from './index';
import _ from 'underscore';
const INITIAL_STATE = {
    projectList: [{
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
      }],
    projectSelected: {},
    canDragBool: true
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case Types.CHANGE_COLUMN:
            let columns = [...state.projectSelected.boards];
            columns.map(col => {
                console.log(col.tasks, action.payload.task.id);
                col.tasks = _.reject(col.tasks, task => {
                    return task.id == action.payload.task.id
                });
                if(col.id == action.payload.newId){
                    col.tasks.push(action.payload.task)
                }
            });
            return {...state, projectSelected: {...state.projectSelected, boards: [...columns]}};
        case Types.GET_DATA:
            return {...state, projectList: action.payload, projectSelected: action.payload[0]};
        case Types.SELECTED_PROJECT:
            return {...state, projectSelected: action.payload};
        case Types.CAN_DRAG:
            return {...state, canDragBool: action.payload};
        default:
            return state;
    }
};