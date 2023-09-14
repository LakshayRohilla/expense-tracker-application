import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

export default function Expenses({items}) {

    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = items.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {filteredExpenses.map(item =>
                // <div key={item.id}>
                //     <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>
                // </div>
                <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
            )}
        </Card>
    )
}