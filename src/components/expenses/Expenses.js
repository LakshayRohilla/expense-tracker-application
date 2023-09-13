import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import './Expenses.css';

export default function Expenses({items}){
    return (
        <Card className='expenses'>
            {items.map(item =>
                <div key={item.id}>
                    <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>
                </div>
            )}
        </Card>
    )
}