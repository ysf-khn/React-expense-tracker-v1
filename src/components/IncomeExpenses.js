import { useContext } from 'react';
import { GlobalContext } from '../store/global-state';
import classes from './IncomeExpenses.module.css';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .map((transaction) => transaction.amount)
    .filter((amt) => amt > 0)
    .reduce((acc, amt) => acc + amt, 0);

  const expense = transactions
    .map((transaction) => transaction.amount)
    .filter((amt) => amt < 0)
    .reduce((acc, amt) => acc + Math.abs(amt), 0);

  return (
    <div className={classes.incExp}>
      <div className={classes.income}>
        <div>Income</div>
        <p>${income}</p>
      </div>
      <div className={classes.expense}>
        <div>Expense</div>
        <p>${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
