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
import QuestionTitle from '@/components/shared/heart-age-calculator/QuestionTitle';
import { IoArrowDownOutline } from 'react-icons/io5';
import { IoArrowUpOutline } from 'react-icons/io5';

interface InputTextProps extends TabProps {
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
  isDecimalAllowed?: boolean;
  limitUnit?: string;
  errorCategory?: string;
  mode?: 'alphabets' | 'number';
}

const InputText: React.FC<InputTextProps> = ({
  formKey,
  formRef,
  setFormRef,
  question,
  errorText,
  steps,
  uiRefresh,
  minValue,
  maxValue,
  label,
  limit,
  valueFormat,
  isDecimalAllowed,
  callback,
  limitUnit,
  errorCategory,
  mode,
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
    if (e.key === 'Backspace' || /^Arrow/.test(e.key)) {
      return;
    }
    if (e.key === 'Enter') {
      handleForward();
      return;
    }
    if (isDecimalAllowed) {
      // Check if the input is a decimal point
      if (e.key === '.' && formRef[formKey]?.includes('.')) {
        e.preventDefault();
        return;
      }
      if (
        e.key &&
        /^[a-zA-Z!@#$%^&*(),?":{}|<>\/\\=\-;'+_\-\[\]]+$/.test(e.key) &&
        e.key !== '.'
      ) {
        e.preventDefault();
        uiSubRefresh(Date.now());
        uiRefresh(Date.now());
      }
    } else {
      if (e.key && /^[a-zA-Z!@#$%^&*(),?":{}|<>\/\\=\-;'.+_\-\[\]]+$/.test(e.key)) {
        e.preventDefault();
        uiSubRefresh(Date.now());
        uiRefresh(Date.now());
      }
    }
    uiSubRefresh(Date.now());
    uiRefresh(Date.now());
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
    steps.current = steps.current + 1;
    uiSubRefresh(Date.now());
    uiRefresh(Date.now());
  };
  const handleBackward = (): void => {
    steps.current = steps.current - 1;
    uiRefresh(Date.now());
  };
  return (
    <article className='w-full h-[26rem] relative'>
      <Slide direction='up' delay={10 * steps.current}>
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
            <QuestionTitle question={question} />
            {formKey === 'weight' || formKey === 'height' ? (
              <h3 className='italic text-grey-text'>
                {label}
                <span className='font-bold'>{valueFormat}.</span>
              </h3>
            ) : (
              <h3 className='italic text-grey-text'>
                {label}
                {limit ? (
                  <span>
                    <span className='font-bold'> {minValue} </span>-
                    <span className='font-bold'> {maxValue}</span>
                    {limitUnit ? (
                      <span className=''> {limitUnit}</span>
                    ) : (
                      <span className='font-bold'>.</span>
                    )}
                  </span>
                ) : (
                  <span className='font-bold'>{valueFormat}.</span>
                )}
              </h3>
            )}

            <TextInput
              type='text'
              inputMode='numeric'
              pattern='[0-9]*'
              value={formRef[formKey]}
              onChange={handleChange}
              onKeyDown={handleKeyPress}
              className={
                showError || showMaxMinError ? 'wrong-animation border-red-main' : ''
              }
              minLength={1}
            />

            {showMaxMinError && (
              <div className='p-2 w-full md:w-full rounded-lg inline-flex justify-center md:justify-start text-red-main bg-red-light'>
                <h1 className='flex flex-col md:flex-row items-center justify-center md:justify-start md:items-center md:gap-1 text-center md:text-left'>
                  <TbAlertTriangleFilled />
                  <span className='font-bold'>Oops! </span>
                  {formKey === 'age' ? (
                    <span className='text-center'>{`The Heart Age Calculator is only validated for people ${errorCategory} between ${minValue} and ${maxValue}.`}</span>
                  ) : (
                    `${errorText} between ${minValue} and ${maxValue}.`
                  )}
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

export default InputText;
