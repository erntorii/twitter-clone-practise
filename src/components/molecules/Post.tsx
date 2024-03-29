import { Avatar } from '@material-ui/core';
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from '@material-ui/icons';

import './Post.css'

type Props = {
  displayName: any;
  username: any;
  verified: any;
  text: any;
  image: any;
  avatar: any;
};

const Post = ({ displayName, username, verified, text, image, avatar }: Props) => (
  <div className="post">
    <div className="post__avatar">
      <Avatar src={avatar} />
    </div>
    <div className="post__body">
      <div className="body__header">
        <div className="post__headerText">
          <h3>
            {displayName}{' '}
            <span className="post__headerSpecial">
              {verified && <VerifiedUser className="post__badge" />} @ {username}
            </span>
          </h3>
        </div>
        <div className="post__headerDescription">
          <p>{text}</p>
        </div>
      </div>
      <img src={image} alt="" />
      <div className="post__footer">
        <ChatBubbleOutline fontSize="small" />
        <Repeat fontSize="small"/>
        <FavoriteBorder fontSize="small" />
        <Publish fontSize="small" />
      </div>
    </div>
  </div>
);

export default Post;
