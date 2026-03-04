'use client';
import React, { ChangeEvent, SetStateAction, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { TbAlertTriangleFilled } from 'react-icons/tb';
import { TabProps, formList } from '../../../../types/Global';
import Check from '@/components/shared/heart-age-calculator/Check';
import ShowError from '@/components/shared/heart-age-calculator/ShowError';
import { Slide } from 'react-awesome-reveal';
import ArrowButton from '@/components/shared/heart-age-calculator/ArrowButton';
import TextInput from '@/components/shared/heart-age-calculator/TextInput';
import QuestionTitle from '@/components/shared/heart-age-calculator/QuestionTitle';
import { IoArrowDownOutline } from 'react-icons/io5';
import { IoArrowUpOutline } from 'react-icons/io5';
import { Modal, ModalContent, ModalBody } from '@nextui-org/react';

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
  const [openAgePopup, setOpenAgePopup] = useState<boolean>(false);
  const [agePopupType, setAgePopupType] = useState<'under35' | 'over75' | null>(null);

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

  const advanceStep = (): void => {
    if (callback) {
      callback();
    }
    steps.current = steps.current + 1;
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
        if (formKey === 'age') {
          const ageVal = parseInt(formRef[formKey]);
          setAgePopupType(ageVal < 35 ? 'under35' : 'over75');
          setOpenAgePopup(true);
          return;
        }
        setMaxMinError(true);
        return;
      }
    }
    advanceStep();
  };

  const handleAgePopupClose = (): void => {
    setOpenAgePopup(false);
  };

  const handleBackward = (): void => {
    steps.current = steps.current - 1;
    uiRefresh(Date.now());
  };

  return (
    <>
      <article className='w-full relative'>
        <Slide direction='up' delay={10 * steps.current}>
          <div className='flex flex-col md:flex-row gap-4 text-xl pb-14'>
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
                  <span>{valueFormat}.</span>
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
                        <span>.</span>
                      )}
                    </span>
                  ) : (
                    <span>{valueFormat}.</span>
                  )}
                </h3>
              )}

              <TextInput
                type='text'
                inputMode={isDecimalAllowed ? 'decimal' : 'numeric'}
                value={formRef[formKey]}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                className={
                  showError || showMaxMinError ? 'wrong-animation border-red-main' : ''
                }
                minLength={1}
                autoFocus
                maxLength={formKey === 'postalCode' ? 4 : undefined}
              />

              {showMaxMinError && (
                <div className='p-2 w-full md:w-full rounded-lg inline-flex justify-center md:justify-start text-red-main bg-red-light'>
                  <h1 className='flex flex-col md:flex-row items-center justify-center md:justify-start md:items-center md:gap-1 text-center md:text-left'>
                    <TbAlertTriangleFilled />
                    <span className='font-bold'>Oops! </span>
                    {`Please enter a value between ${minValue} and ${maxValue}.`}
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

      <Modal
        isDismissable={true}
        placement='center'
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, ease: 'easeOut' },
            },
            exit: {
              y: 20,
              opacity: 0,
              transition: { duration: 0.2, ease: 'easeIn' },
            },
          },
        }}
        isOpen={openAgePopup}
        onClose={handleAgePopupClose}
        scrollBehavior='inside'>
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              <div className='py-6 space-y-4 flex flex-col items-center'>
                {agePopupType === 'under35' ? (
                  <div className='space-y-4 text-center'>
                    <h1 className='font-semibold text-[20px] leading-[28px]'>
                      This calculator is designed for people aged 35–75 who do not have
                      heart disease. If you are under 35, it may not estimate your risk
                      accurately and as such you are unable to proceed in using the
                      calculator. If you are wanting to understand your risk please speak
                      to your GP.
                    </h1>
                    <p className='text-[16px] leading-[24px] text-[#444444]'>
                      To help prevent heart disease, start with knowing your risk factors
                      and making positive changes to lower your risk. Healthy choices can
                      help prevent heart attacks and strokes.
                    </p>
                    <a
                      href='https://www.heartfoundation.org.au/your-heart/are-you-at-risk-of-heart-disease'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-6 rounded-3xl inline-flex items-center gap-2 bg-red-main py-2 text-white font-bold'>
                      Learn more
                    </a>
                    <button
                      onClick={onClose}
                      className='block text-gray-500 underline text-sm mt-2'>
                      Close
                    </button>
                  </div>
                ) : (
                  <div className='space-y-4 text-center'>
                    <h1 className='font-semibold text-[20px] leading-[28px]'>
                      This calculator is designed for people aged 35–75 years. If you are
                      over 75, it may not estimate your risk accurately and as such you
                      are unable to proceed in using the calculator.
                    </h1>
                    <p className='text-[16px] leading-[24px] text-[#444444]'>
                      For people over 75, one of the best ways to understand your risk of
                      heart attack or stroke is to speak to your GP about a
                      Medicare-subsidised{' '}
                      <a
                        href='https://www.heartfoundation.org.au/your-heart/heart-health-checks'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='underline font-semibold'>
                        Heart Health Check
                      </a>
                      . A Heart Health Check will
                      help you understand your risk of having a heart attack or stroke in
                      the next 5 years and what you can do to prevent it.
                    </p>
                    <a
                      href='https://www.heartfoundation.org.au/your-heart/heart-health-checks'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-6 rounded-3xl inline-flex items-center gap-2 bg-red-main py-2 text-white font-bold'>
                      Learn more
                    </a>
                    <button
                      onClick={onClose}
                      className='block text-gray-500 underline text-sm mt-2'>
                      Close
                    </button>
                  </div>
                )}
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default InputText;