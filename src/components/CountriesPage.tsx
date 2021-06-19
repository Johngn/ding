/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, RootState } from '../state';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #fff;
  color: var(--text-color);
  padding: 1rem 2rem;
  border-radius: 20px;
  max-width: 500px;
  margin: auto;
  margin-top: 300px;
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  text-align: center;
`;

const Select = styled.select`
  padding: 20px;
  width: 10px;
`;

const Button = styled.button`
  background-color: var(--button-color);
  border: none;
  border-radius: 20px;
  margin-top: 20px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const Home: React.FC = () => {
  const [countries, setCountries] = useState([
    {
      id: '0',
      name: 'Ireland',
    },
    {
      id: '2',
      name: 'India',
    },
    {
      id: '3',
      name: 'England',
    },
  ]);

  const [selectedCountry, setSelectedCountry] = useState('');

  const dispatch = useDispatch();

  const { getData, submitCountry } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const state = useSelector((state: RootState) => state);

  useEffect(() => {
    const getCountries = () => {
      // const data = getData();
      // setCountries(data);
    };

    getCountries();
  }, []);

  if (state.country.selectedCountry !== '') {
    return <Redirect to="/home" />;
  }

  return (
    <Div>
      <H1>Select your country</H1>
      <Select onChange={e => setSelectedCountry(e.target.value)}>
        {countries.map(country => (
          <option key={country.id} value={country.name}>
            {country.name}
          </option>
        ))}
      </Select>
      <Button onClick={() => submitCountry(selectedCountry)}>Submit</Button>
    </Div>
  );
};

export default Home;
