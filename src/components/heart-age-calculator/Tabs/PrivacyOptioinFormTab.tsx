import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { TabProps, formList } from '../../../../types/Global';
import { GiCheckMark } from 'react-icons/gi';
import ShowError from '@/components/shared/heart-age-calculator/ShowError';
import { Slide } from 'react-awesome-reveal';
import ArrowButton from '@/components/shared/heart-age-calculator/ArrowButton';
import { IoArrowDownOutline } from 'react-icons/io5';
import { IoArrowUpOutline } from 'react-icons/io5';

interface CustomOptionFormProps extends TabProps {
  question: string;
  errorText: string;
  uiRefresh: React.Dispatch<SetStateAction<number>>;
  steps: React.MutableRefObject<number>;
  setFormRef: React.Dispatch<SetStateAction<formList>>;
  options: any;
  callback?: () => void;
}

const PrivacyOptionForm: React.FC<CustomOptionFormProps> = ({
  formKey,
  formRef,
  question,
  errorText,
  steps,
  uiRefresh,
  options,
  callback,
  setFormRef,
}) => {
  const selectedValue = useRef<any>(null);
  const [, subUiRefresh] = useState(-1);
  const [showError, setShowError] = React.useState(false);
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (key === 'Y') {
        handleClick(true);
      } else if (key === 'N') {
        handleClick(false);
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
    //eslint-disable-next-line
  }, []);
  const handleClick = (value: boolean) => {
    setFormRef((prev) => ({ ...prev, [formKey]: value }));
    setShowError(false);
    selectedValue.current = value;
    uiRefresh(Date.now());
    subUiRefresh(Date.now());
    setTimeout(() => {
      handleForward();
    }, 500);
  };
  const handleDivKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleForward();
    }
  };
  const handleForward = (): void => {
    if (selectedValue.current === null) {
      if (formRef[formKey] === undefined || formRef[formKey] === null) {
        setShowError(true);
        return;
      }
    }
    if (callback) {
      callback();
    }
    steps.current = steps.current + 1;
    uiRefresh(Date.now());
  };

  const handleBackward = (): void => {
    steps.current = steps.current - 1;
    uiRefresh(Date.now());
  };
  return (
    <article className='w-full h-[26rem] relative'>
      <Slide className='w-full h-full' direction='up' delay={10 * steps.current}>
        <div className=' flex flex-col md:flex-row gap-4 text-xl'>
          <div className=' flex items-start'>
            <p className='w-full flex gap-1 items-center'>
              {steps.current}
              <span className='font-bold'>
                <AiOutlineArrowRight />
              </span>
            </p>
          </div>
          <div className=' flex flex-col gap-4'>
            <h1 className='text-2xl font-bold text-black'>
            I have read and understand that I may be contacted as outlined in the <a href='#/' className='cursor-pointer underline'>
                Privacy Statement
              </a>
              .*
            </h1>
            <div className='w-[13rem] flex flex-col gap-3'>
              {options?.map((item: any, idx: number) => {
                return (
                  <div
                    key={idx}
                    onKeyDown={handleDivKeyDown}
                    onClick={() => handleClick(item.value)}
                    className={`${
                      formRef[formKey] === item.value
                        ? 'border-[1px] animate border-black selectOption'
                        : 'border-[#696969] border-[1.5px]'
                    } px-2 py-2 flex justify-between items-center border rounded-md  bg-grey-light hover:bg-grey-dark `}>
                    <div className='flex items-center'>
                      <span
                        className={` leading-4 text-xs w-[22px] h-[22px] flex items-center justify-center 
                    ${
                      formRef[formKey] === item.value
                        ? 'bg-black text-white border-black'
                        : 'text-black bg-white border-[#696969]'
                    } border  font-bold rounded-sm p-1 mr-2`}>
                        {item.letter}
                      </span>
                      {item.label}
                    </div>
                    {formRef[formKey] === item.value && (
                      <span className='text-black font-bold text-xl'>
                        <GiCheckMark />
                      </span>
                    )}
                  </div>
                );
              })}
              {showError && <ShowError errorText={errorText} isErrorTextLarge={true} />}
            </div>
          </div>
        </div>
      </Slide>
      <div
        className={`bg-white flex gap-[0.10rem] justify-end text-2xl mt-8 absolute bottom-0 right-2`}>
        {' '}
        <ArrowButton
          icon={IoArrowUpOutline}
          disabled={steps.current === 1 || steps.current === 0}
          onClick={handleBackward}
          className={steps.current === 1 ? 'text-grey-light' : 'text-white'}
        />
        <ArrowButton icon={IoArrowDownOutline} onClick={handleForward} />
      </div>
    </article>
  );
};

export default PrivacyOptionForm;
