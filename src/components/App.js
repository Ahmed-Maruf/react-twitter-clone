import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import Dashboard from './Dashboard';
import authedUser from '../reducers/authedUser';
import LoadingBarContainer from 'react-redux-loading-bar';
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  
  render() {
    return (
        <div>
          <LoadingBarContainer/>
          {
            this.props.loading === true ?
                null : <Dashboard/>
          }
        </div>
    );
  }
  
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null,
  };
  
}

export default connect(mapStateToProps)(App);