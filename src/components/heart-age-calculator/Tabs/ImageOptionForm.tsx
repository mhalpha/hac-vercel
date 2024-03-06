import React, { SetStateAction, useEffect, useReducer, useRef, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { TbAlertTriangleFilled } from 'react-icons/tb';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { TabProps, formList } from '../../../../types/Global';
import { GiCheckMark } from 'react-icons/gi';
import Check from '@/components/shared/heart-age-calculator/Check';
import Image from 'next/image';
import ShowError from '@/components/shared/heart-age-calculator/ShowError';
import { Slide } from 'react-awesome-reveal';
import ArrowButton from '@/components/shared/heart-age-calculator/ArrowButton';
import QuestionTitle from '@/components/shared/heart-age-calculator/QuestionTitle';
import { IoArrowDownOutline } from 'react-icons/io5';
import { IoArrowUpOutline } from 'react-icons/io5';

interface OptionFormProps extends TabProps {
  question: string;
  errorText: string;
  uiRefresh: React.Dispatch<SetStateAction<number>>;
  steps: React.MutableRefObject<number>;
  setFormRef: React.Dispatch<SetStateAction<formList>>;
  options: any;
}

const ImageOptionForm: React.FC<OptionFormProps> = ({
  formKey,
  setFormRef,
  formRef,
  question,
  errorText,
  steps,
  uiRefresh,
  options,
}) => {
  const selectedValue = useRef('');
  const [, subUiRefresh] = useState(-1);
  const [showError, setShowError] = React.useState(false);
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (key === 'A' || key === 'M') {
        handleClick('Male');
      } else if (key === 'B' || key === 'F') {
        handleClick('Female');
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
    //eslint-disable-next-line
  }, []);
  const handleClick = (value: string) => {
    setFormRef((prev) => ({ ...prev, [formKey]: value }));
    setShowError(false);
    selectedValue.current = value;
    uiRefresh(Date.now());
    subUiRefresh(Date.now());
    setTimeout(() => {
      handleForward();
    }, 500);
  };

  const handleForward = (): void => {
    if (!selectedValue.current) {
      if (formRef[formKey] === undefined || formRef[formKey] === null) {
        setShowError(true);
        return;
      }
    }
    steps.current = steps.current + 1;
    uiRefresh(Date.now());
  };
  const handleBackward = (): void => {
    steps.current = steps.current - 1;
    uiRefresh(Date.now());
  };
  return (
    <article className='w-full  h-[26rem] relative'>
      <Slide className='w-full h-full' direction='up' delay={10 * steps.current}>
        <div className='flex flex-col md:flex-row  gap-4 text-xl'>
          <div className='flex items-start'>
            <p className='flex gap-1 items-center'>
              {steps.current}
              <span className='font-bold'>
                <AiOutlineArrowRight />
              </span>
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <QuestionTitle question={question} />
            <div className='flex flex-col sm:flex-row gap-3 '>
              {options?.map((item: any, idx: number) => {
                return (
                  <div
                    key={idx}
                    onClick={() => handleClick(item.value)}
                    className={`${
                      formRef[formKey] === item.value
                        ? 'border-[1px] animate border-black selectOption'
                        : 'border-[#696969] border-[1.5px]'
                    } w-full h-full md:px-2 md:py-2 flex flex-row md:flex-col justify-start md:justify-center   rounded-md  bg-grey-light hover:bg-grey-dark `}>
                    <div className='w-[3rem] h-[4rem] md:w-[10rem] md:h-[10rem] relative'>
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div className='flex justify-between items-center'>
                      <div className='flex items-center'>
                        <span
                          className={`w-[22px] h-[22px] flex items-center justify-center leading-4 text-xs
                    ${
                      formRef[formKey] === item.value
                        ? 'bg-black text-white border-black'
                        : 'text-black bg-white border-[#696969]'
                    } border font-bold rounded-sm  mr-2`}>
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
                  </div>
                );
              })}
            </div>
            {showError && <ShowError errorText={errorText} />}
            {/* <Check formKey={formKey} formRef={formRef} handleClick={handleForward} /> */}
          </div>
        </div>
      </Slide>
      <div
        className={` h-full flex gap-[0.10rem] justify-end items-end text-2xl absolute bottom-0 right-2`}>
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

export default ImageOptionForm;
