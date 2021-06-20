/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, RootState } from '../state';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #fff;
  color: var(--text-color);
  padding: 1rem 2rem;
  border-radius: 20px;
  max-width: 500px;
  margin: auto;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const H1 = styled.h2`
  text-align: center;
`;

const OperatorContainer = styled.div`
  border: 2px solid var(--border-color);
  border-radius: 7px;
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  outline: none;
  &:hover {
    background-color: var(--secondary);
    color: #fff;
  }
`;

const OperatorsPage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { submitOperator } = bindActionCreators(actionCreators, dispatch);

  const state = useSelector((state: RootState) => state);

  const operators = state.apiData.data.operators.filter(
    operator => operator.iso === state.country.selectedCountry.iso
  );

  const selectOperator = (operatorName: string) => {
    submitOperator(operatorName);
  };

  return (
    <Div>
      <H1>Select Operator</H1>
      {operators &&
        operators.map(operator => (
          <OperatorContainer
            key={operator.id}
            onClick={() => {
              selectOperator(operator.name);
              history.push('/products');
            }}
          >
            {operator.name}
          </OperatorContainer>
        ))}
    </Div>
  );
};

export default OperatorsPage;
