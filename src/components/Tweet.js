import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatDate, formatTweet} from '../utils/helpers';
import {TiArrowBackOutline} from 'react-icons/all';
import {TiHeartFullOutline} from 'react-icons/all';
import {TiHeartOutline} from 'react-icons/all';
import {handleToggleTweet} from '../actions/tweets';
import {Link} from 'react-router-dom';

class Tweet extends Component {
  
  toParent = (e, parentID) => {
    e.preventDefault();
    //TODO: redirect to paretn tweet
  };
  
  handleLike = (e) => {
    e.preventDefault();
    // todo: Handle Like Tweet
  
    const { dispatch, tweet, authedUser } = this.props;
    console.log('Auth: ', authedUser);
    dispatch(handleToggleTweet({
      id: tweet.id,
      hasLiked: tweet.hasLiked,
      authedUser,
    }));
  };
  
  render() {
    const tweet = this.props.tweet;
    
    if (tweet === null) {
      return (
          <p>This tweet does not exist</p>
      );
    }
    
    console.log('Tweet now: ', tweet);
    const {name, avatar, timestamp, parent, text, hasLiked, replies, likes, id} = this.props.tweet;
    
    return (
        <Link to={`/tweet/${id}`} className='tweet'>
          <img className='avatar' src={avatar} alt={`The name of the avatar is ${name}`}/>
          <div className='tweet-info'>
            <div>
              <span>{name}</span>
              <div>{formatDate(timestamp)}</div>
              {
                parent && (
                    <button className='replying-to' onClick={(e) => this.toParent(
                        e, parent.id)}>
                      Replying to @{parent.author}
                    </button>
                )
              }
              <p>{text}</p>
            </div>
            <div className='tweet-icons'>
              <TiArrowBackOutline className='tweet-icon'/>
              <span>{replies !== 0 && replies}</span>
              <button className='heart-button' onClick={this.handleLike}>
                {hasLiked === true
                    ?
                    <TiHeartFullOutline color='#e0245e' className='tweet-icon'/>
                    : <TiHeartOutline className='tweet-icon'/>}
              </button>
              <span>{likes !== 0 && likes}</span>
            </div>
          </div>
        </Link>
    );
  }
  
}

function mapStateToProps({tweets, authedUser, users}, {id}) {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
  
  return {
    authedUser,
    tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser,
        parentTweet) : null,
  };
}

export default connect(mapStateToProps)(Tweet);