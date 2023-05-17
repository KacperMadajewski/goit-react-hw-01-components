import PropTypes from 'prop-types';
import { FriendListItem } from './friendListItem';
import styles from './friendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.components}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
