import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { TabProps, formList } from '../../../../types/Global';
import { GiCheckMark } from 'react-icons/gi';
import ShowError from '@/components/shared/heart-age-calculator/ShowError';
import { Slide } from 'react-awesome-reveal';
import ArrowButton from '@/components/shared/heart-age-calculator/ArrowButton';
import { Modal, ModalContent, ModalBody } from '@nextui-org/react';
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
  callback?: () => void;
}

const Option = ({
  item,
  handleClick,
  formRef,
  formKey,
}: {
  item: {
    value: boolean;
    letter: string;
    label: string;
  };
  handleClick: (value: boolean) => void;
  formRef: any;
  formKey: string;
}) => {
  return (
    <div
      onClick={() => handleClick(item.value)}
      className={`w-[10rem] px-2 py-2 flex justify-between items-center rounded-md  ${
        formRef[formKey] === item.value
          ? 'animate border-black selectOption'
          : 'border-[#696969] border-[1.5px]'
      } bg-grey-light hover:bg-grey-dark `}>
      <div className='flex items-center'>
        <div
          className={`
  ${
    formRef[formKey] === item.value
      ? 'bg-black text-white border-black'
      : 'text-black bg-white border-[#696969]'
  } border font-bold rounded-sm  leading-4 text-xs w-[22px] h-[22px] flex items-center justify-center  mr-2`}>
          {item.letter}
        </div>
        <span className='text-[20px] leading-[28px] font-medium'> {item.label}</span>
      </div>
      {formRef[formKey] === item.value && (
        <span className='text-black font-bold text-xl'>
          <GiCheckMark />
        </span>
      )}
    </div>
  );
};

const OptionForm: React.FC<OptionFormProps> = ({
  formKey,
  formRef,
  question,
  errorText,
  steps,
  uiRefresh,
  options,
  callback,
  setFormRef,
}) => {
  const [openPopup, setOpenPopUp] = useState<boolean>(false);
  const selectedValue = useRef<any>(null);
  const [, subUiRefresh] = useState(-1);
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (key === 'Y') {
        handleClick(true);
      } else if (key === 'N') {
        handleClick(false);
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
    //eslint-disable-next-line
  }, []);
  const handleClick = (value: boolean) => {
    if (formRef[formKey] !== value) {
      setFormRef((prev) => ({ ...prev, [formKey]: value }));
    }
    // formRef[formKey] = value;
    setShowError(false);
    selectedValue.current = value;
    uiRefresh(Date.now());
    subUiRefresh(Date.now());
    if (formKey === 'bloodPressureLevel' || formKey === 'cholesterolLevel') {
      if (value === false) {
        setOpenPopUp(true);
        return;
      }
    }
    setTimeout(() => {
      handleForward();
    }, 500);
  };

  const handleForward = (): void => {
    if (selectedValue.current === null) {
      if (formRef[formKey] === undefined || formRef[formKey] === null) {
        setShowError(true);
        return;
      }
    }
    if (callback) {
      callback();
    }

    steps.current = steps.current + 1;
    uiRefresh(Date.now());
  };
  const handleBackward = (): void => {
    steps.current = steps.current - 1;
    uiRefresh(Date.now());
  };
  const handleDivKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleForward();
    }
  };
  return (
    <>
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
            <div className='w-full flex flex-col gap-4'>
              <QuestionTitle question={question} />
              <div className='w-full flex flex-col gap-3' onKeyDown={handleDivKeyDown}>
                {options?.map((item: any, idx: number) => {
                  return (
                    // dynamically increasing animation time
                    <Option
                      key={idx}
                      handleClick={(value) => handleClick(value)}
                      formKey={formKey}
                      formRef={formRef}
                      item={item}
                    />
                    // <div
                    //   key={idx}
                    //   onClick={() => handleClick(item.value)}
                    //   className={`w-[10rem] px-3 py-2 flex justify-between items-center rounded-md border-black ${
                    //     formRef[formKey] === item.value ? 'border-[1px] animate' : ''
                    //   } bg-grey-light hover:bg-grey-dark selectOption`}>
                    //   <h1>
                    //     <span
                    //       className={`
                    // ${
                    //   formRef[formKey] === item.value
                    //     ? 'bg-black text-white'
                    //     : 'text-black bg-white'
                    // } border border-black p-1 mr-2`}>
                    //       {item.letter}
                    //     </span>
                    //     {item.label}
                    //   </h1>
                    //   {formRef[formKey] === item.value && (
                    //     <span className='text-black font-bold text-xl'>
                    //       <GiCheckMark />
                    //     </span>
                    //   )}
                    // </div>
                  );
                })}
                {showError && <ShowError errorText={errorText} />}
              </div>
              {/* <Check formKey={formKey} formRef={formRef} handleClick={handleForward} /> */}
            </div>
          </div>
        </Slide>

        <div
          className={`bg-white flex gap-[0.10rem] justify-end text-2xl mt-8 absolute right-2 bottom-0`}>
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
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: 'easeOut',
              },
            },
            exit: {
              y: 20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: 'easeIn',
              },
            },
          },
        }}
        hideCloseButton
        isOpen={openPopup}
        onClose={() => setOpenPopUp(false)}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className='py-10 space-y-4 flex flex-col items-center'>
                  <h1 className='font-semibold text-[24px] leading-[32px] text-center'>
                    The Heart Age Calculator will use Australian average{' '}
                    {formKey === 'bloodPressureLevel'
                      ? 'blood pressure '
                      : 'cholesterol '}
                    levels based on your age and sex.
                  </h1>
                  <button
                    onClick={handleForward}
                    className='px-6 rounded-3xl flex items-center gap-2 bg-red-main py-2 text-white font-bold'>
                    OK
                  </button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default OptionForm;
