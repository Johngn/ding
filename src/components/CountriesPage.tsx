/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, RootState } from '../state';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Div from './Div';

interface CountriesListProps {
  countriesListVisible: boolean;
  countriesLength: number | undefined;
}

const Input = styled.input<CountriesListProps>`
  height: 40px;
  padding: 10px;
  outline: none;
  font-size: 16px;
  border: 1px solid var(--border-color);

  border-radius: ${props =>
    props.countriesListVisible &&
    props.countriesLength &&
    props.countriesLength > 0
      ? '7px 7px 0 0'
      : '7px'};
`;

const CountriesList = styled.div<CountriesListProps>`
  border: 1px solid var(--border-color);
  position: absolute;
  width: 100%;
  background-color: #fff;
  margin-top: -1px;
  border-radius: 0 0 7px 7px;

  display: ${props =>
    props.countriesListVisible &&
    props.countriesLength &&
    props.countriesLength > 0
      ? 'block'
      : 'none'};
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Li = styled.li`
  list-style: none;
  padding: 5px;
  cursor: pointer;
  border-top: 1px solid var(--border-color);

  &:hover {
    background-color: var(--button-hover-color);
  }
`;

const Home: React.FC = () => {
  interface Countries {
    iso: string;
    name: string;
    prefix: string;
  }
  const [countries, setCountries] = useState<Countries[]>();
  const [inputValue, setInputValue] = useState('');
  const [countriesListVisible, setCountriesListVisible] = useState(false);

  const dispatch = useDispatch();

  const { submitCountry } = bindActionCreators(actionCreators, dispatch);

  const state = useSelector((state: RootState) => state);

  const history = useHistory();

  const selectCountry = (country: any) => {
    submitCountry(country);
  };

  const filterCountries = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);

    const filteredCountries = state.apiData.data.countries.filter(country =>
      country.name.toLowerCase().includes(e.currentTarget.value.toLowerCase())
    );

    setCountries(filteredCountries);
  };

  return (
    <Div>
      <h2 style={{ textAlign: 'center' }}>Where are you sending credit?</h2>
      <Input
        type="text"
        placeholder="Select Country"
        value={inputValue}
        countriesLength={countries && countries.length}
        countriesListVisible={countriesListVisible}
        onFocus={() => setCountriesListVisible(true)}
        onBlur={() => setCountriesListVisible(false)}
        onChange={filterCountries}
      />
      <div style={{ position: 'relative' }}>
        <CountriesList
          countriesListVisible={countriesListVisible}
          countriesLength={countries && countries.length}
        >
          <Ul>
            {countries &&
              countries.map((country, i) => (
                <Li
                  key={i}
                  value={country.name}
                  onMouseDown={() => {
                    selectCountry(country);
                    history.push('/phone-number');
                  }}
                >
                  +{country.prefix} {country.name}
                </Li>
              ))}
          </Ul>
        </CountriesList>
      </div>
    </Div>
  );
};

export default Home;
