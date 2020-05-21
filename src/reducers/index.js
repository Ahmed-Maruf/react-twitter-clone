//Library
import {combineReducers} from 'redux';

//Our Code
import users from './users';
import tweets from './tweets';
import authedUser from './authedUser';

export default combineReducers({
  authedUser,
  users,
  tweets,
});