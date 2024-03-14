import Image from 'next/image';
import React, { SetStateAction } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
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
  const handleForward = (): void => {
    steps.current = steps.current - 1;
    uiRefresh(Date.now());
  };
  const handleBackward = (): void => {
    steps.current = steps.current - 1;
    uiRefresh(Date.now());
  };
  const handleRestart = (): void => {
    steps.current = steps.current - 1;
    setFormRef((prev) => ({
      ...prev,
      heartAttack: null,
      sex: null,
      age: null,
      smoke: null,
      height: null,
      weight: null,
      heartDisease: null,
      diabetes: null,
      bloodPressureMeditation: null,
      bloodPressureLevel: null,
      systolicBloodPressureLevel: null,
      diastolicBloodPressure: null,
      cholesterolLevel: null,
      TotalCholesterolLevel: null,
      HBLCholesterolLevel: null,
      postalCode: null,
    }));
    uiRefresh(Date.now());
  };
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
        <button
          onClick={handleRestart}
          className={`${
            steps.current === 1 ? 'text-grey-light' : 'text-white'
          } bg-red-main p-2 font-bold text-2xl hover:bg-red-white px-6 rounded-3xl  mt-4`}>
          Restart
        </button>
      </div>
    </article>
  );
};

export default AlreadyHeartAttack;
