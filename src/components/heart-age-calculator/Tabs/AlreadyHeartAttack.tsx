import Image from 'next/image';
import React, { SetStateAction } from 'react';
import { formList } from '../../../../types/Global';

interface OptionFormProps {
  uiRefresh: React.Dispatch<SetStateAction<number>>;
  steps: React.MutableRefObject<number>;
  setFormRef: React.Dispatch<SetStateAction<formList>>;
}

const AlreadyHeartAttack: React.FC<OptionFormProps> = ({
  steps,
  setFormRef,
  uiRefresh,
}) => {
  return (
    <article className='w-full h-full flex flex-col gap-3 items-center justify-start'>
      <div className='relative w-[10rem] h-[10rem] flex justify-start items-center'>
        <Image src='/Images/Heart_Age_Calculator/ExclamationMark.svg' alt='' fill />
      </div>
      <div className='w-full md:max-w-[70%] flex flex-col items-center'>
        <h1 className='text-lg md:text-xl text-center'>
          Unfortunately, this calculator is not suitable for individuals who have already
          experienced a heart attack or stroke, or have been diagnosed with heart disease.
          We recommend consulting your doctor for personalised guidance on managing your
          heart condition.<br></br> <br></br> Additionally, you can join our <a className='text-[#C8102E]' href='https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fgroups%2Fmyheartmylifecommunity' target="_blank">MyHeart, MyLife online
          community</a>. This safe online group provides a supportive space where individuals
          living with heart conditions can share experiences, offer and receive support,
          and discover ways to lead a heart-healthy life.
        </h1>
        <a
          href='https://www.healthdirect.gov.au/australian-health-services/guided-search/general-practice'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-red-main text-white font-bold px-6 rounded-3xl text-2xl py-2 mt-4 inline-block'>
          Book a GP
        </a>
      </div>
    </article>
  );
};

export default AlreadyHeartAttack;