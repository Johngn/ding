/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, RootState } from '../state';

const Title: React.FC = () => {
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

  return (
    <>
      <h1>Select your country</h1>
      <select onChange={e => setSelectedCountry(e.target.value)}>
        {countries.map(country => (
          <option key={country.id} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <button onClick={() => submitCountry(selectedCountry)}>Submit</button>
    </>
  );
};

export default Title;
