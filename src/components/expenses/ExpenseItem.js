import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

export default function ExpenseItem({title, amount, date}) {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>₹ {amount}</div>
            </div>
        </Card>
    )
}