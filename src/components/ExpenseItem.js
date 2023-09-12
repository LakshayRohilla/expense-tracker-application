import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem({title, amount, date}) {
    return (
        <div className='expense-item'>
            <ExpenseDate date={date}/>
            <iv className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>₹ {amount}</div>
            </iv>
        </div>
    )
}