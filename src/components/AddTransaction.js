import { useContext, useState } from 'react';
import { GlobalContext } from '../store/global-state';
import classes from './AddTransaction.module.css';

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.random().toString(),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setAmount(0);
    setText('');
  };

  return (
    <>
      <h3 className={classes.add}>Add Transaction</h3>
      <form>
        <label htmlFor="item">Item</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add item..."
        />
        <label htmlFor="amount">
          Amount <br />
          (plus - income, minus-expense)
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={submitHandler}>Add </button>
      </form>
    </>
  );
};

export default AddTransaction;
