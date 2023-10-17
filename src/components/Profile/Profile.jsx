import css from './Profile.module.css';
import { ReactPropTypes } from 'react';
import user from './user.json';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div>
    <div>
      <img src={avatar} alt="user avatar" />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>

    <ul>
      <li>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{stats.views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </li>
    </ul>
  </div>
);
