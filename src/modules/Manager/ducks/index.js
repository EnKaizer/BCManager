/**
 * Created by caiqu on 01/03/2018.
 */
import {ManagerTypes} from './actions_types.js';
import * as ManagerActions from './actions.js';
import {reducer} from './reducer.js';

export const Types = ManagerTypes;
export const ManagerReducer = reducer;
export const Actions = ManagerActions;