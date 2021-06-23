import React from 'react';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/BounceLoader';

const override = css`
  display: block;
  margin: 200px auto;
  border-color: #fff;
`;

const LoadingSpinner: React.FC = () => {
  return (
    <div>
      <ClipLoader color={'#fff'} css={override} size={150} />
    </div>
  );
};

export default LoadingSpinner;
