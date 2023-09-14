
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

export default function ExpensesList({itemsList}){
  if (itemsList.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }
  console.log('Iam the itemsList');
  console.log(itemsList);

  return (
    <ul className='expenses-list'>
      {itemsList.map((expense) =>
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )}
    </ul>
  );
};
