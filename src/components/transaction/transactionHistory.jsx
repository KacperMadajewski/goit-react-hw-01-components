import PropTypes from 'prop-types';
import styles from './transactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Currency</th>
        </tr>
      </thead>

      {items.map(item => (
        <tbody key={item.id}>
          <tr>
            <td className={styles.data}>{item.type}</td>
            <td className={styles.data}>{item.amount}</td>
            <td className={styles.data}>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
