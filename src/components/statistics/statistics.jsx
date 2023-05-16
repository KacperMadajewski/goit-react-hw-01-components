import PropTypes from 'prop-types';
import styles from './statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.component}>
      <h2>{title}</h2>
      <ul className={styles.list}>
        {stats.map(stat => (
          <li className={styles.categories} key={stat.id}>
            <span>{stat.label} =</span>
            <span>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
