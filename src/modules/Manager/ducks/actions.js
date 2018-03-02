/**
 * Created by caiqu on 01/03/2018.
 */
import {Types} from './index';

export const changeColumn = (task, newId, oldId) => {
    return{type: Types.CHANGE_COLUMN, payload: {task, newId, oldId}}
};