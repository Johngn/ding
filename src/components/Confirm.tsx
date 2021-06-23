/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { useHistory } from 'react-router-dom';
import Div from './Div';
import Button from './Button';
import Summary from './Summary';

const Confirm: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('country')) {
      const country = localStorage.getItem('country') || '{}';
      submitCountry(JSON.parse(country));
    }
    if (localStorage.getItem('phoneNumber')) {
      const phoneNumber = localStorage.getItem('phoneNumber') || '{}';
      submitPhoneNumber(phoneNumber);
    }
    if (localStorage.getItem('operator')) {
      const operator = localStorage.getItem('operator') || '{}';
      submitOperator(JSON.parse(operator));
    }
    if (localStorage.getItem('product')) {
      const product = localStorage.getItem('product') || '{}';
      submitProduct(product);
    }
  }, []);

  const { submitProduct, submitOperator, submitPhoneNumber, submitCountry } =
    bindActionCreators(actionCreators, dispatch);

  return (
    <Div>
      <Summary />
      <Button onClick={() => history.push('/success')}>Confirm Payment</Button>
    </Div>
  );
};

export default Confirm;
