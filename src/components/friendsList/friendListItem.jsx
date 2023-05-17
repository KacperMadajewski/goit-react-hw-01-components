import PropTypes from 'prop-types';
import styles from './friendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const statusColor = isOnline ? 'green' : 'red';

  return (
    <li key={id} style={{ backgroundColor: statusColor }}>
      <span className={styles.list}>{isOnline}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
