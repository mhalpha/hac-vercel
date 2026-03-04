import React, { SetStateAction, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { TabProps, formList } from '../../../../types/Global';
import ArrowButton from '@/components/shared/heart-age-calculator/ArrowButton';
import { IoArrowDownOutline } from 'react-icons/io5';
import { IoArrowUpOutline } from 'react-icons/io5';
import { sendGTMEvent } from '@next/third-parties/google';

interface WantReportTabProps extends TabProps {
  uiRefresh: React.Dispatch<SetStateAction<number>>;
  steps: React.MutableRefObject<number>;
  setFormRef: React.Dispatch<SetStateAction<formList>>;
}

const WantReportTab: React.FC<WantReportTabProps> = ({
  formKey,
  formRef,
  steps,
  uiRefresh,
  setFormRef,
}) => {
  const [firstName, setFirstName] = useState<string>(formRef['firstName'] || '');
  const [lastName, setLastName] = useState<string>(formRef['lastName'] || '');
  const [email, setEmail] = useState<string>(formRef['email'] || '');
  const [emailError, setEmailError] = useState<string>('');

  const handleGetReport = (): void => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    setFormRef((prev) => ({
      ...prev,
      wantReport: true,
      firstName: firstName || null,
      lastName: lastName || null,
      email,
    }));
    sendGTMEvent({
      event: 'buttonClick',
      text: 'Get report',
      position: 'heart age calculator',
    });
    steps.current = steps.current + 1;
    uiRefresh(Date.now());
  };

  const handleNoThanks = (): void => {
    setFormRef((prev) => ({
      ...prev,
      wantReport: false,
      firstName: null,
      lastName: null,
      email: null,
    }));
    sendGTMEvent({
      event: 'buttonClick',
      text: 'No thanks',
      position: 'heart age calculator',
    });
    steps.current = steps.current + 1;
    uiRefresh(Date.now());
  };

  const handleBackward = (): void => {
    steps.current = steps.current - 1;
    uiRefresh(Date.now());
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleGetReport();
    }
  };

  return (
    <article className='w-full relative'>
      <div className='flex flex-col md:flex-row gap-4 text-xl pb-14'>
          <div className='flex items-start'>
            <p className='flex gap-1 items-center'>
              {steps.current}
              <span className='font-bold'>
                <AiOutlineArrowRight />
              </span>
            </p>
          </div>
          <div className='flex flex-col gap-4 w-full md:max-w-xl'>
            <h1 className='text-xl md:text-2xl font-bold text-black'>
              To receive your Heart Age Report and free tools to help improve your heart
              health, enter your details below{' '}
              <span className='font-normal italic text-lg'>(optional)</span>
            </h1>
            <div className='flex flex-col gap-3'>
              <input
                type='text'
                placeholder='First name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onKeyDown={handleInputKeyDown}
                className='border border-gray-400 rounded-md px-3 py-2 text-lg focus:outline-none focus:border-black w-full md:w-72'
              />
              <input
                type='text'
                placeholder='Last name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onKeyDown={handleInputKeyDown}
                className='border border-gray-400 rounded-md px-3 py-2 text-lg focus:outline-none focus:border-black w-full md:w-72'
              />
              <div className='flex flex-col gap-1'>
                <input
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError('');
                  }}
                  onKeyDown={handleInputKeyDown}
                  className={`border rounded-md px-3 py-2 text-lg focus:outline-none focus:border-black w-full md:w-72 ${
                    emailError ? 'border-red-500' : 'border-gray-400'
                  }`}
                />
                {emailError && <p className='text-red-600 text-sm'>{emailError}</p>}
              </div>
            </div>
            <button
              onClick={handleGetReport}
              className='bg-red-main text-white font-bold px-6 rounded-3xl py-2 text-lg w-fit'>
              Get report
            </button>
            <button
              onClick={handleNoThanks}
              className='text-gray-600 underline text-base hover:text-gray-800 text-left'>
              No thanks, continue to see my result
            </button>
            <p className='text-sm text-gray-600'>
              By selecting &apos;Get Report&apos; you consent to your information being collected and
              used in accordance with the{' '}
              <a
                href='https://www.heartfoundation.org.au/heart-age-calculator/privacy-collection-notice'
                target='_blank'
                rel='noopener noreferrer'
                className='underline'>
                collection notice
              </a>
              {' '}and the Heart Foundation{' '}
              <a
                href='https://www.heartfoundation.org.au/hfps13'
                target='_blank'
                rel='noopener noreferrer'
                className='underline'>
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className='bg-white flex gap-[0.10rem] justify-end text-2xl absolute bottom-0 right-2'>
        <ArrowButton
          icon={IoArrowUpOutline}
          disabled={steps.current === 1 || steps.current === 0}
          onClick={handleBackward}
          className={steps.current === 1 ? 'text-grey-light' : 'text-white'}
        />
        <ArrowButton icon={IoArrowDownOutline} onClick={handleNoThanks} />
      </div>
    </article>
  );
};

export default WantReportTab;