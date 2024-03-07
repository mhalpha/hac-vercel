'use client';
import React, { ChangeEvent, SetStateAction } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { TbAlertTriangleFilled } from 'react-icons/tb';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { TabProps, formList } from '../../../../types/Global';
import Check from '@/components/shared/heart-age-calculator/Check';
import ShowError from '@/components/shared/heart-age-calculator/ShowError';
import { Slide } from 'react-awesome-reveal';
import ArrowButton from '@/components/shared/heart-age-calculator/ArrowButton';
import TextInput from '@/components/shared/heart-age-calculator/TextInput';
import { IoArrowDownOutline } from 'react-icons/io5';
import { IoArrowUpOutline } from 'react-icons/io5';

interface CustomInputTextProps extends TabProps {
  question: string;
  errorText: string;
  uiRefresh: any;
  steps: React.MutableRefObject<number>;
  minValue?: number;
  maxValue?: number;
  label?: string;
  limit: boolean;
  valueFormat?: string;
  callback?: () => void;
  setFormRef: React.Dispatch<SetStateAction<formList>>;
  boldWord?: string;
  placeholder?: string;
}

const CustomInputText: React.FC<CustomInputTextProps> = ({
  formKey,
  formRef,
  setFormRef,
  question,
  errorText,
  steps,
  uiRefresh,
  minValue,
  maxValue,
  limit,
  callback,
  placeholder,
  boldWord,
}) => {
  const [, uiSubRefresh] = React.useState(Date.now());
  const [showError, setShowError] = React.useState(false);
  const [showMaxMinError, setMaxMinError] = React.useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormRef((prev) => ({ ...prev, [formKey]: e.target.value }));
    setShowError(false);
    setMaxMinError(false);
    uiRefresh(Date.now());
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent non-numeric characters from being entered
    if (e.key === 'Backspace' || /^Arrow/.test(e.key)) {
      return;
    }
    if (e.key === 'Enter') {
      handleForward();
      return;
    }
    if (formKey === 'email') {
      // Allow characters valid in an email address, prevent others
      if (!/^[\w@.\d]+$/.test(e.key)) {
        e.preventDefault();
        uiSubRefresh(Date.now());
        uiRefresh(Date.now());
      }
      // Additional actions (regardless of the key pressed)
      uiSubRefresh(Date.now());
      uiRefresh(Date.now());
    } else {
      // Default logic for other input fields
      if (/^\d|[!@#$%^&*(),.?":{}|<>]+$/.test(e.key)) {
        e.preventDefault();
        uiSubRefresh(Date.now());
        uiRefresh(Date.now());
      }
      // Additional actions (regardless of the key pressed)
      uiSubRefresh(Date.now());
      uiRefresh(Date.now());
    }
  };

  const handleForward = (): void => {
    if (!formRef[formKey] || formRef[formKey] === '0' || formRef[formKey] === 0) {
      setShowError(true);
      return;
    }

    const min = minValue ?? Number.MIN_SAFE_INTEGER;
    const max = maxValue ?? Number.MAX_SAFE_INTEGER;
    if (limit) {
      if (formRef[formKey] < min || formRef[formKey] > max) {
        setMaxMinError(true);
        return;
      }
    }
    if (callback) {
      callback();
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(formRef[formKey]);
    if (formKey === 'email') {
      if (isValid) {
        steps.current = steps.current + 1;
        uiSubRefresh(Date.now());
        uiRefresh(Date.now());
        return;
      } else {
        setShowError(true);
        return;
      }
    } else {
      steps.current = steps.current + 1;
      uiSubRefresh(Date.now());
      uiRefresh(Date.now());
    }
  };
  const handleBackward = (): void => {
    steps.current = steps.current - 1;
    uiRefresh(Date.now());
  };
  return (
    <article className='w-full h-[26rem] relative'>
      <Slide className='w-full h-full' direction='up' delay={10 * steps.current}>
        <div className='flex flex-col md:flex-row gap-4 text-xl'>
          <div className='flex items-start'>
            <p className='flex gap-1 items-center'>
              {steps.current}
              <span className='font-bold'>
                <AiOutlineArrowRight />
              </span>
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold text-black'>
              {question}
              <b>{boldWord && boldWord}</b>?
            </h1>
            {formRef[formKey] === 'email' ? (
              <TextInput
                type='text'
                placeholder={placeholder}
                value={formRef[formKey]}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                className={
                  showError || showMaxMinError
                    ? 'wrong-animation border-red-main text-2xl md:text-5xl'
                    : 'text-2xl md:text-5xl'
                }
                autoFocus
              />
            ) : (
              <TextInput
                type='text'
                placeholder={placeholder}
                value={formRef[formKey]}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                className={
                  showError || showMaxMinError ? 'wrong-animation border-red-main ' : ''
                }
                autoFocus
              />
            )}

            {showMaxMinError && (
              <div className='p-2  w-full md:w-[29rem] rounded-lg flex text-red-main bg-red-light'>
                <h1 className='flex items-center'>
                  <TbAlertTriangleFilled />

                  <span className='font-bold'> Oops!</span>
                  {`${errorText} between ${minValue} and ${maxValue}`}
                </h1>
              </div>
            )}
            {showError && <ShowError errorText={errorText} />}
            <Check formKey={formKey} formRef={formRef} handleClick={handleForward} />
          </div>
        </div>
      </Slide>
      <div className='bg-white flex gap-[0.10rem] justify-end text-2xl absolute bottom-0 right-2'>
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

export default CustomInputText;
