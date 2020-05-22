import {getInitialData} from '../utils/api';
import {receiveTweets} from './tweets';
import {receiveUsers} from './users';
import {setAuthUser} from './authedUser';
import {hideLoading, showLoading} from 'react-redux-loading-bar';

export const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({users, tweets}) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}