import React from 'react';
import { shallow } from 'enzyme';
import ExpenseSummary from '../../components/ExpenseSummary';

test('should connectly render expenseSummay with 1 expense', () => {    
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={10025}/>);
    expect(wrapper).toMatchSnapshot();
  });
  

  test('should connectly render expenseSummay with 2 expenses', () => {   
    const wrapper = shallow(<ExpenseSummary expensesCount={2} expensesTotal={8000000025}/>);
    expect(wrapper).toMatchSnapshot();
  });