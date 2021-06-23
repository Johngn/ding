/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, RootState } from '../state';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Div from './Div';

const Success: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('country')) {
      const country = localStorage.getItem('country') || '{}';
      submitCountry(JSON.parse(country));
    }
    if (localStorage.getItem('phoneNumber')) {
      const phoneNumber = localStorage.getItem('phoneNumber') || '{}';
      submitPhoneNumber(JSON.parse(phoneNumber));
    }
  }, []);

  const { submitOperator, submitPhoneNumber, submitCountry } =
    bindActionCreators(actionCreators, dispatch);

  const state = useSelector((state: RootState) => state);

  const operators = state.apiData.data.operators.filter(
    operator => operator.iso === state.country.selectedCountry.iso
  );

  const selectOperator = (operator: any) => {
    submitOperator(operator);
  };

  return (
    <Div>
      <h2>Success!</h2>
    </Div>
  );
};

export default Success;
