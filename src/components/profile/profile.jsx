import styles from './profile.module.css'

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.background}>
      <div className={styles.avatar}>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.Components}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.Components}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.Components}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
