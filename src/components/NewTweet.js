import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {handleAddTweet} from '../actions/tweets';

class NewTweet extends Component {
  state = {
    text: '',
    home: false
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const {text, home} = this.state;
    const {dispatch, id} = this.props;
    
    dispatch(handleAddTweet(text, id));
    
    this.setState(() => ({
      text: '',
      home: id ? false : true
    }));
    
  };
  
  handleChange = (e) => {
    const text = e.target.value;
    
    this.setState({
      text,
    });
  };
  
  render() {
    const tweetLeft = 280 - this.state.text.length;
    
    if (this.state.home) {
      return <Redirect to='/'/>
    }
    return (
        
        
        <div>
          <h3 className='center'>Compose new tweet</h3>
          <form className='new-tweet' onSubmit={this.handleSubmit}>
            <textarea value={this.state.text} onChange={this.handleChange} maxLength={280} className='textarea' placeholder="what's happening" name="" id="" cols="30" rows="10"></textarea>
            {
              tweetLeft <= 100 && (
                  <div className='tweet-length'>
                    {tweetLeft}
                  </div>
              )
            }
            <button disabled={this.state.text ===
            ''} type='submit' className='btn'>Submit
            </button>
          </form>
        </div>
    );
  }
  
}

export default connect()(NewTweet);