import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { TabProps } from '../../../../types/Global';

interface CheckProps extends TabProps {
  handleClick: () => void;
}

const Check: React.FC<CheckProps> = ({ formRef, formKey, handleClick }) => {
  return (
    <>
      {(formRef[formKey] !== undefined || formRef[formKey] !== null) && (
        <div className='flex items-center gap-3 '>
          <button
            onClick={handleClick}
            className='w-[6rem] rounded-3xl flex justify-between items-center gap-2 bg-red-main px-4 py-2 text-white font-bold'>
            OK
            <span>
              <GiCheckMark />
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default Check;
