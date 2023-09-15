
import Card from "../ui/Card";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses({items}) {

    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    console.log('type of')
    console.log(typeof items)
    console.log(items)

    const filteredExpenses = items.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    // Another way for conditional rendering.

    // let expensesContent = <p>No expenses found.</p>;

    // if (filteredExpenses.length > 0) {
    //   expensesContent = filteredExpenses.map((expense) => (
    //     <ExpenseItem
    //       key={expense.id}
    //       title={expense.title}
    //       amount={expense.amount}
    //       date={expense.date}
    //     />
    //   ));
    // }

    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {/*{expensesContent}*/}
            {/*{filteredExpenses.length === 0 ? <p>No data available !!</p> : filteredExpenses.map(item =>*/}
            {/*    // <div key={item.id}>*/}
            {/*    //     <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>*/}
            {/*    // </div>*/}
            {/*    <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>*/}
            {/*) }*/}

            {/*Code without conditional rendering*/}
            {/*{filteredExpenses.map(item =>*/}
            {/*    // <div key={item.id}>*/}
            {/*    //     <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>*/}
            {/*    // </div>*/}
            {/*    <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>*/}
            {/*)}*/}
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList itemsList={filteredExpenses}/>
        </Card>
    )
}