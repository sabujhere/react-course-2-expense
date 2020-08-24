import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenseTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => (
    <div>
    Viewing {expensesCount} expense{expensesCount === 0 ? '':'s'} totalling {numeral(expensesTotal/100).format('$0,0.00')}
    </div>
);

//export default ExpensesSummary;
const mapStateToProps = (state) =>{
    const filteredExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: filteredExpenses.length,
        expensesTotal: selectExpenseTotal(filteredExpenses)
    }
}

 export default connect(mapStateToProps)(ExpensesSummary);