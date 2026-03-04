import React, { SetStateAction, useEffect } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';

const StartForm = ({
  uiRefresh,
  steps,
}: {
  uiRefresh: React.Dispatch<SetStateAction<number>>;
  steps: React.MutableRefObject<number>;
}) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleClick();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
    //eslint-disable-next-line
  }, []);

  const handleClick = () => {
    steps.current = 1;
    uiRefresh(Date.now());
  };

  const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const eventData = {
    event: 'navigate_form',
    form_name: 'heart age calculator',
    form_stage: 'start',
  };

  return (
    <div className='w-full h-full flex flex-col items-center gap-8 md:gap-4'>
        <div className='space-y-4'>
          <h1 className='font-bold text-2xl text-center'>
            Get your Heart Age in under 3 minutes
          </h1>
          <p className='text-center'>
            The Heart Age Calculator gives you an estimate of your heart age based on
            key risk factors for heart disease. Your risk of a heart attack or stroke
            may be higher if your heart age is greater than your actual age.
          </p>
          <p className='text-center font-semibold'>
            TIP: To get a more accurate estimate, it helps to have your most recent
            blood pressure and cholesterol levels – but you can still complete the
            calculator without it.
          </p>
        </div>
        <div className=''>
          <button
            onKeyDown={handleButtonKeyDown}
            onClick={() => {
              handleClick();
              sendGTMEvent(eventData);
            }}
            className='py-2 px-6 rounded-3xl text-xl bg-red-main text-white font-bold mt-2'>
            Start
          </button>
        </div>
        <p className='text-center text-sm text-gray-600'>
          Disclaimer: This calculator is intended for people aged 35–75 who do not
          have heart disease. If you are outside this age range, we recommend discussing your
          heart health with your GP. To learn more, visit FAQs below.
        </p>
      </div>
    </div>
  );
};

export default StartForm;