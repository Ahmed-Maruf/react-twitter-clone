import React, {Component} from 'react';
import {connect} from 'react-redux';

class NewTweet extends Component {
  state = {
    text: '',
    
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const {text} = this.state;
    
    this.setState(() => ({
      text: '',
    }));
    
    //Todo: Redirect to home view if submited
  };
  
  handleChange = (e) => {
    const text = e.target.value;
    
    this.setState({
      text,
    });
  };
  
  render() {
    const tweetLeft = 280 - this.state.text.length;
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