import {getInitialData} from '../utils/api';
import {receiveTweets} from './tweets';
import {receiveUsers} from './users';
import {setAuthUser} from './authedUser';

export const AUTHED_ID = 'tylermcginnis';

export function handleInitialData(tweets) {
  return (dispatch) => {
    return getInitialData().then(({users, tweets}) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthUser(AUTHED_ID));
    });
  };
}