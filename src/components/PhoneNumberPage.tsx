/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
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

const InputContainer = styled.div`
  display: flex;
  height: 40px;
  font-size: 16px;
`;

const PrefixContainer = styled.div`
  width: 15%;
  border: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  padding: 10px;
  border-radius: 7px 0 0 7px;
`;

interface InputProps {
  phoneNumberError: boolean;
}

const Input = styled.input<InputProps>`
  border-radius: 0 7px 7px 0;
  border-left: none;
  padding: 10px;
  width: 85%;
  outline: none;

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

const Button = styled.button`
  background-color: var(--button-color);
  border: none;
  border-radius: 20px;
  margin-top: 20px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const PhoneNumberPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();

  const { submitPhoneNumber } = bindActionCreators(actionCreators, dispatch);

  const state = useSelector((state: RootState) => state);

  const selectPhoneNumber = () => {
    console.log(phoneNumber.length);
    if (phoneNumber.length > 6) {
      setPhoneNumberError(false);
      submitPhoneNumber(phoneNumber);
      history.push('/operators');
    } else {
      setPhoneNumberError(true);
    }
  };

  return (
    <Div>
      <H1>Who are you sending credit to?</H1>
      <InputContainer style={{ display: 'flex', width: '100%' }}>
        <PrefixContainer>
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
  );
};

export default PhoneNumberPage;
