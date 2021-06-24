/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state';
import styled from 'styled-components';

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

const Summary: React.FC = () => {
  const state = useSelector((state: RootState) => state);
  const { country, phoneNumber, operator, product } = state;

  return (
    <>
      <SummaryItem>
        {country.selectedCountry.name !== '' ? (
          <>
            <p>Country:</p> <p>{country.selectedCountry.name}</p>
          </>
        ) : (
          ''
        )}
      </SummaryItem>
      <SummaryItem>
        {phoneNumber.selectedPhoneNumber !== '' ? (
          <>
            <p>Phone Number:</p>{' '}
            <p>
              +{country.selectedCountry.prefix}{' '}
              {phoneNumber.selectedPhoneNumber}
            </p>
          </>
        ) : (
          ''
        )}
      </SummaryItem>
      <SummaryItem>
        {operator.selectedOperator.name !== '' ? (
          <>
            <p>Operator:</p> <p>{operator.selectedOperator.name}</p>
          </>
        ) : (
          ''
        )}
      </SummaryItem>
      <SummaryItem>
        {product.selectedProduct !== '' ? (
          <>
            <p>Product:</p> <p>{product.selectedProduct}</p>
          </>
        ) : (
          ''
        )}
      </SummaryItem>
    </>
  );
};

export default Summary;
