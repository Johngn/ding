/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, RootState } from '../state';
import Div from './Div';

const Success: React.FC = () => {
  const dispatch = useDispatch();

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

  const state = useSelector((state: RootState) => state);

  const { country, phoneNumber } = state;

  return (
    <Div>
      <h2 style={{ textAlign: 'center' }}>Success!</h2>
      <h3 style={{ textAlign: 'center' }}>
        Your TopUp to +{country.selectedCountry.prefix}{' '}
        {phoneNumber.selectedPhoneNumber} was successful
      </h3>
    </Div>
  );
};

export default Success;
