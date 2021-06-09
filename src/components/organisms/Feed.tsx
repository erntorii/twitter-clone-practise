import { useEffect, useState } from 'react';

import db from 'firebase';
import TweetBox from 'components/molecules/TweetBox';
import Post from 'components/molecules/Post';
import './Feed.css'

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
      ))}
    </div>
  );
}

export default Feed;
