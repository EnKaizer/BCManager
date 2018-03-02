/**
 * Created by caiqu on 01/03/2018.
 */
import {Types} from './index';
import _ from 'underscore';
const INITIAL_STATE = {
  columnList: [{
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
      }]
};

export const reducer = (state = INITIAL_STATE, action) => {
    console.log({INITIAL_STATE});
    console.log({action});
    switch (action.type){
        case Types.CHANGE_COLUMN:
            let columns = [...state.columnList];
            columns.map(col => {
                col.tasks = _.reject(col.tasks, task => {
                    return task.id == action.payload.task.id
                });
                if(col.id == action.payload.newId){
                    col.tasks.push(action.payload.task)
                }
                console.log(col.tasks.includes(action.payload.task))
                if(col.tasks.includes(action.payload.task)){
                    console.log('oi');
                }
            });
            return {...state, columnList: columns};
        default:
            return state;
    }
};