import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import Dashboard from './Dashboard';
import authedUser from '../reducers/authedUser';
import {BrowserRouter as Router} from 'react-router-dom';
import LoadingBarContainer from 'react-redux-loading-bar';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';
import Nav from './Nav';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  
  render() {
    return (
        <Router>
          <div className='container'>
            <LoadingBarContainer/>
            <Nav/>
            {
              this.props.loading === true ?
                  null :
                  <div>
                    <Route path='/' exact component={Dashboard}/>
                    <Route path='/tweet/:id' exact component={TweetPage}/>
                    <Route path='/new' component={NewTweet}/>
                  </div>
            }
          </div>
        </Router>
    );
  }
  
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null,
  };
  
}

export default connect(mapStateToProps)(App);