import { useContext } from 'react';
import { GlobalContext } from '../store/global-state';
import classes from './TransactionList.module.css';

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  const deleteHandler = (id) => {
    deleteTransaction(id);
    // console.log(id);
  };

  return (
    <>
      <h3 className={classes.title}>History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.amount > 0 ? classes.plus : classes.minus}
          >
            <span
              className={classes.delete}
              onClick={() => deleteHandler(transaction.id)}
            >
              X
            </span>
            {transaction.text}
            <span>
              {transaction.amount > 0 ? '+' : '-'}$
              {Math.abs(transaction.amount)}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
