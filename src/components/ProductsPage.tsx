/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, RootState } from '../state';
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

const Select = styled.select`
  border: 1px solid var(--border-color);
  border-radius: 7px;
  padding: 10px;
  width: 100%;
  outline: none;
`;

const ProductsPage: React.FC = () => {
  const [operator, setOperator] = useState('');

  const dispatch = useDispatch();

  const { submitPhoneNumber } = bindActionCreators(actionCreators, dispatch);

  const state = useSelector((state: RootState) => state);

  const operators = state.apiData.data.operators.filter(
    operator => operator.iso === state.country.selectedCountry.iso
  );

  return (
    <Div>
      <H1>Select Product</H1>
      <Select>
        <option></option>
        {operators &&
          operators.map((operator, i) => (
            <option key={i}>{operator.name}</option>
          ))}
      </Select>
    </Div>
  );
};

export default ProductsPage;
