import { useContext } from 'react';
import { GlobalContext } from '../store/global-state';
import classes from './Balance.module.css';

const Balance = (props) => {
  const { transactions } = useContext(GlobalContext);

  const balance = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, amt) => acc + amt, 0);

  return (
    <div className={classes.balance}>
      <h2>Your Balance</h2>
      <h3>${balance}</h3>
    </div>
  );
};

export default Balance;
