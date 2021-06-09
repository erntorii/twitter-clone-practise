import { useState } from 'react';
import { Avatar, Button } from '@material-ui/core';

import db from './firebase';
import './TweetBox.css';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      username: 'erntorii',
      displayName: 'erina',
      avatar: 'https://pbs.twimg.com/profile_images/1402435031671316483/EHaJFCAa_400x400.jpg',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1402435031671316483/EHaJFCAa_400x400.jpg" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          placeholder="Optional: Enter image URL"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          className="tweetBox__imageInput"
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox__button">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
