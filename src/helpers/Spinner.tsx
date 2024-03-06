import React from 'react';

const Spinner = ({ size = '50' }: any) => (
  <svg
    className='my-spinner'
    viewBox='0 0 50 50'
    style={{ width: `${size}px`, height: `${size}px` }}>
    <circle
      className='path strokecolor'
      cx='25'
      cy='25'
      r='20'
      fill='none'
      strokeWidth='5'></circle>
  </svg>
);
export default Spinner;
