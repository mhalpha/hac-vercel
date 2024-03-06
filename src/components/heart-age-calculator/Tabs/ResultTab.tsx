'use client';
import Result from './Result';
import React, { SetStateAction, Dispatch, useState } from 'react';
import { LookupTables, formList } from '../../../../types/Global';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Slide } from 'react-awesome-reveal';
import ArrowButton from '@/components/shared/heart-age-calculator/ArrowButton';
import { IoArrowDownOutline, IoArrowUpOutline } from 'react-icons/io5';
const ResultTab = ({
  formRef,
  steps,
  uiRefresh,
  lookupTables,
  setFormRef,
}: {
  formRef: any;
  steps: React.MutableRefObject<number>;
  uiRefresh: Dispatch<SetStateAction<number>>;
  lookupTables: LookupTables;
  setFormRef: React.Dispatch<SetStateAction<formList>>;
}) => {
  const [showResults, setShowResults] = useState<boolean>(false);
  const handleGetResultsClick = () => {
    setShowResults(true);
  };
  const handleClick = () => {
    setFormRef({
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
      wantReport: null,
      privacyAcceptance: null,
    });
    steps.current = 0;
    uiRefresh(Date.now());
    // window.location.reload();
  };
  const handleForward = (): void => {
    steps.current = steps.current + 1;
    uiRefresh(Date.now());
  };
  const handleBackward = (): void => {
    steps.current = steps.current - 1;
    uiRefresh(Date.now());
  };

  return (
    <article
      className={`w-full h-full relative flex flex-col ${
        showResults ? 'justify-start' : 'justify-start'
      } items-center `}>
      {!showResults && (
        <div className='w-full h-[26rem] flex flex-col items-center'>
          <Slide direction='up' delay={100} className='w-full h-full'>
            <div className=' flex flex-col md:flex-row gap-4 text-xl'>
              <div className='w-full flex flex-col'>
                <h1 className='font-bold text-xl md:text-4xl text-center'>
                  We have calculated your estimated heart age based on the information you
                  gave us.
                </h1>
                <div className='w-full  flex justify-center'>
                  <button
                    className='bg-red-main text-white font-bold px-6 rounded-3xl text-2xl py-2 mt-4'
                    onClick={handleGetResultsClick}>
                    Get results
                  </button>
                </div>
              </div>
            </div>
          </Slide>
          <div className='bg-white flex gap-[0.10rem] justify-end items-end text-2xl absolute bottom-0 right-2'>
            <ArrowButton
              icon={IoArrowUpOutline}
              disabled={steps.current === 1 || steps.current === 0}
              onClick={handleBackward}
              className={steps.current === 1 ? 'text-grey-light' : 'text-white'}
            />
            <ArrowButton
              icon={IoArrowDownOutline}
              onClick={handleForward}
              disabled={true}
            />
          </div>
        </div>
      )}

      {showResults && (
        <Result
          handleRestartClick={handleClick}
          uiRefresh={uiRefresh}
          formRef={formRef}
          steps={steps}
          lookupTables={lookupTables}
        />
      )}
    </article>
  );
};
export default ResultTab;
