/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, RootState } from '../state';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Div from './Div';
import Button from './Button';
import Summary from './Summary';

const H1 = styled.h2`
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  height: 40px;
  font-size: 16px;
`;

interface InputProps {
  phoneNumberError: boolean;
}

const PrefixContainer = styled.div<InputProps>`
  width: 15%;
  border: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px 0 0 7px;
  font-size: 20px;

  border: ${props =>
    props.phoneNumberError
      ? '1px solid red;'
      : '1px solid var(--border-color);'};
`;

const Input = styled.input<InputProps>`
  border-radius: 0 7px 7px 0;
  border-left: none;
  padding: 10px;
  width: 85%;
  outline: none;
  font-size: 20px;

  border: ${props =>
    props.phoneNumberError
      ? '1px solid red;'
      : '1px solid var(--border-color);'};
`;

const Warning = styled.div<InputProps>`
  text-align: center;
  font-size: 14px;
  color: red;
  margin-top: 10px;
  display: ${props => (props.phoneNumberError ? 'block' : 'none')};
`;

const PhoneNumberPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('country')) {
      const country = localStorage.getItem('country') || '{}';
      submitCountry(JSON.parse(country));
    }

    if (localStorage.getItem('phoneNumber')) {
      const phoneNumber = localStorage.getItem('phoneNumber') || '{}';
      setPhoneNumber(JSON.parse(phoneNumber));
    }
  }, []);

  const dispatch = useDispatch();

  const { submitPhoneNumber, submitCountry } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const state = useSelector((state: RootState) => state);

  const selectPhoneNumber = () => {
    // Some simple validation, check if phone number is at least 7 digits long
    if (phoneNumber.toString().length >= 7) {
      setPhoneNumberError(false);
      submitPhoneNumber(phoneNumber.toString());
      history.push('/operators');
    } else {
      setPhoneNumberError(true);
    }
  };

  return (
    <>
      <Div>
        <H1>Who are you sending credit to?</H1>
        <InputContainer style={{ display: 'flex', width: '100%' }}>
          <PrefixContainer phoneNumberError={phoneNumberError}>
            + {state.country.selectedCountry.prefix}
          </PrefixContainer>
          <Input
            phoneNumberError={phoneNumberError}
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={e => {
              setPhoneNumber(e.target.value.replace(/[^0-9]+/g, ''));
              setPhoneNumberError(false);
            }}
          />
        </InputContainer>
        <Warning phoneNumberError={phoneNumberError}>
          Please enter a valid number
        </Warning>

        <Button onClick={selectPhoneNumber}>Submit</Button>
      </Div>
      <Div>
        <Summary />
      </Div>
    </>
  );
};

export default PhoneNumberPage;
