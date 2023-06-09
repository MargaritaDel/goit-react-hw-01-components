import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionTableBody,
  TransactionsHistory,
  TransactionTableHead,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionTableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionTableHead>

      <TransactionTableBody>
        {items.map(({ id, type, amount, currency }, index) => (
          <TransactionsHistory
            key={id}
            style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#ffffff' }}
          >
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TransactionsHistory>
        ))}
      </TransactionTableBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
