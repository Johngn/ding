import React from 'react';
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
`;

const H1 = styled.h1`
  text-align: center;
`;

const Error: React.FC = () => {
  return (
    <Div>
      <H1>404</H1>
      <h3 style={{ textAlign: 'center' }}>Sorry, this page cannot be found</h3>
    </Div>
  );
};

export default Error;
