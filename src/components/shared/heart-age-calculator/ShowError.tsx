import React from 'react';
import { TbAlertTriangleFilled } from 'react-icons/tb';

const ShowError = ({
  errorText,
  isErrorTextLarge,
}: {
  errorText: string;
  isErrorTextLarge?: boolean;
}) => {
  return (
    <div
      className={`p-2 w-full ${
        isErrorTextLarge ? 'md:w-[39.5rem]' : 'md:w-[20.5rem]'
      } rounded-lg inline-flex justify-center md:justify-start text-red-main bg-red-light`}>
      <h1 className='flex flex-col md:flex-row items-center'>
        <TbAlertTriangleFilled />
        <span className='font-bold mr-2'>Oops!</span> <span>{errorText}</span>
      </h1>
    </div>
  );
};

export default ShowError;
