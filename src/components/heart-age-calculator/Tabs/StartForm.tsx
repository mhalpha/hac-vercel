import React, { SetStateAction, useEffect } from 'react';
import { Slide } from 'react-awesome-reveal';

const StartForm = ({
  uiRefresh,
  steps,
}: {
  uiRefresh: React.Dispatch<SetStateAction<number>>;
  steps: React.MutableRefObject<number>;
}) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // const key = event.key.toUpperCase();
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
      // Call handleForward function when Enter key is pressed
      handleClick();
    }
  };
  return (
    <Slide direction='up' delay={100}>
      <div className='w-full h-full flex flex-col items-center gap-8 md:gap-4'>
        <div className='space-y-4'>
          <h1 className='font-bold text-2xl text-center'>
            Check your estimated heart age now by answering these simple questions.
          </h1>
          <ul className='ml-4'>
            <li className='text-center'>
              We can send you more information about your heart age result, as well as
              tips to maintain a healthy heart.
            </li>
          </ul>
        </div>
        <div className=''>
          <button
            onKeyDown={handleButtonKeyDown}
            onClick={handleClick}
            className='py-2 px-6 rounded-3xl text-xl  bg-red-main text-white font-bold mt-2'>
            Start
          </button>
        </div>
      </div>
    </Slide>
  );
};

export default StartForm;
