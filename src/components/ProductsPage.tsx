/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, RootState } from '../state';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Div from './Div';

const ProductsContainer = styled.div`
  border-radius: 7px;
  display: flex;
  flex-wrap: wrap;
`;

const ProductContainer = styled.div`
  border-radius: 7px;
  padding: 10px;
  // margin: 10px;
  width: 50%;
`;

const Product = styled.div`
  font-size: 30px;
  border: 3px solid var(--border-color);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary);
    color: #fff;
  }
`;

const ProductsPage: React.FC = () => {
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
    if (localStorage.getItem('operator')) {
      const operator = localStorage.getItem('operator') || '{}';
      submitOperator(JSON.parse(operator));
    }
  }, []);

  const dispatch = useDispatch();

  const { submitProduct, submitOperator, submitPhoneNumber, submitCountry } =
    bindActionCreators(actionCreators, dispatch);

  const state = useSelector((state: RootState) => state);

  const products = state.apiData.data.products.filter(
    product => product.id === state.operator.selectedOperator.id
  );

  const selectProduct = (product: any) => {
    submitProduct(product);
  };

  return (
    <Div>
      <h2 style={{ textAlign: 'center' }}>What do you want to send?</h2>
      <ProductsContainer>
        {products &&
          products[0] &&
          products[0].products.map((product, index) => (
            <ProductContainer>
              <Product
                key={index}
                onClick={() => {
                  selectProduct(product);
                  history.push('/success');
                }}
              >
                &euro;{product}
              </Product>
            </ProductContainer>
          ))}
      </ProductsContainer>
    </Div>
  );
};

export default ProductsPage;
