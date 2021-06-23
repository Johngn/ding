/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, RootState } from '../state';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Div from './Div';
import Summary from './Summary';
import LoadingSpinner from './LoadingSpinner';

const OperatorContainer = styled.div`
  border: 1px solid var(--border-color);
  border-left: 4px solid var(--border-color);
  border-right: 4px solid var(--border-color);
  border-radius: 10px;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  padding: 10px;
  width: 100%;

  transition: all 0.1s;

  &:hover {
    transform: scale(1.02);
  }
`;

const OperatorsPage: React.FC = () => {
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
    <>
      {state.apiData.loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Div>
            <h2 style={{ textAlign: 'center' }}>Select Operator</h2>
            {operators &&
              operators.map(operator => (
                <OperatorContainer
                  key={operator.id}
                  onClick={() => {
                    selectOperator(operator);
                    history.push('/products');
                  }}
                >
                  {operator.name}
                </OperatorContainer>
              ))}
          </Div>
          <Div>
            <Summary />
          </Div>
        </>
      )}
    </>
  );
};

export default OperatorsPage;
