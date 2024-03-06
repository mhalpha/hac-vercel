import React, { SetStateAction } from 'react';
import { formOptions } from './formList';

import StartForm from './Tabs/StartForm';
import OptionForm from './Tabs/OptionForm';
import ImageOptionForm from './Tabs/ImageOptionForm';
import InputTextFrom from './Tabs/InputTextForm';
import ResultTab from './Tabs/ResultTab';
import { LookupTables, formList } from '../../../types/Global';
import AlreadyHeartAttack from './Tabs/AlreadyHeartAttack';
import WantReportTab from './Tabs/WantReportTab';
import CustomInputText from './Tabs/CustomInputTextForm';
import PrivacyOptionForm from './Tabs/PrivacyOptioinFormTab';

interface TabsProps {
  uiRefresh: React.Dispatch<SetStateAction<number>>;
  formRef: formList;
  setFormRef: React.Dispatch<SetStateAction<formList>>;
  steps: React.MutableRefObject<number>;
  lookupTables: LookupTables;
}

const Tabs = ({ formRef, steps, uiRefresh, setFormRef, lookupTables }: TabsProps) => {
  const handleBloodPressureLevel = () => {
    if (formRef['bloodPressureLevel'] === false) {
      formRef['diastolicBloodPressure'] = null;
      formRef['systolicBloodPressureLevel'] = null;
    }
    uiRefresh(Date.now());
  };
  const handleCholestrolLevel = () => {
    if (formRef['cholesterolLevel'] === false) {
      formRef['TotalCholesterolLevel'] = null;
      formRef['HBLCholesterolLevel'] = null;
    }
    uiRefresh(Date.now());
  };
  const handleFormRefresh = () => {
    uiRefresh(Date.now());
  };
  const handleBackward = (): void => {
    steps.current = steps.current - 1;
    uiRefresh(Date.now());
  };
  return (
    <div className={`w-full h-full flex flex-col md:max-w-[70%] mx-auto`}>
      {(() => {
        switch (steps.current) {
          case 0:
            return <StartForm key={steps.current} steps={steps} uiRefresh={uiRefresh} />;
          case 1:
            return (
              <OptionForm
                key={steps.current}
                formRef={formRef}
                setFormRef={setFormRef}
                formKey='heartAttack'
                steps={steps}
                question='Have you had a heart attack or stroke, or do you have heart
              disease?'
                errorText='Please make a selection'
                uiRefresh={uiRefresh}
                options={formOptions.HeartAttackOptions}
              />
            );
          case 2:
            let componentRender;
            if (formRef['heartAttack'] === true) {
              componentRender = (
                <AlreadyHeartAttack
                  setFormRef={setFormRef}
                  uiRefresh={uiRefresh}
                  steps={steps}
                />
              );
            } else {
              componentRender = (
                <ImageOptionForm
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='sex'
                  steps={steps}
                  question='What is your sex?'
                  errorText='Please make a selection'
                  uiRefresh={uiRefresh}
                  options={formOptions.GenderOptions}
                />
              );
            }
            return componentRender;
          case 3:
            return (
              <InputTextFrom
                key={steps.current}
                formRef={formRef}
                setFormRef={setFormRef}
                formKey='age'
                steps={steps}
                question='How old are you?'
                errorText='Please enter a value'
                label='Please enter a value between'
                uiRefresh={uiRefresh}
                minValue={35}
                maxValue={75}
                limit={true}
                errorCategory='aged'
              />
            );
          case 4:
            return (
              <OptionForm
                key={steps.current}
                formRef={formRef}
                setFormRef={setFormRef}
                formKey='smoke'
                steps={steps}
                question='Do you smoke?'
                errorText='Please make a selection'
                uiRefresh={uiRefresh}
                options={formOptions.SmokeOptions}
              />
            );
          case 5:
            return (
              <InputTextFrom
                key={steps.current}
                formRef={formRef}
                setFormRef={setFormRef}
                formKey='weight'
                steps={steps}
                question='What is your weight?'
                label='Please provide your answer in'
                valueFormat={` kilograms (kg)`}
                errorText='Please enter a value'
                uiRefresh={uiRefresh}
                minValue={35}
                maxValue={300}
                limit={true}
                errorCategory='weighted'
              />
            );
          case 6:
            return (
              <InputTextFrom
                key={steps.current}
                formRef={formRef}
                setFormRef={setFormRef}
                formKey='height'
                steps={steps}
                question='What is your height?'
                label='Please provide your answer in'
                valueFormat={` centimetres (cm)`}
                errorText='Please enter a value'
                errorCategory='height'
                uiRefresh={uiRefresh}
                limit={true}
                minValue={60}
                maxValue={220}
              />
            );
          case 7:
            return (
              <OptionForm
                key={steps.current}
                formRef={formRef}
                setFormRef={setFormRef}
                formKey='heartDisease'
                steps={steps}
                question='Do you have a family history of heart disease?'
                errorText='Please make a selection'
                uiRefresh={uiRefresh}
                options={formOptions.SmokeOptions}
              />
            );

          case 8:
            return (
              <OptionForm
                key={steps.current}
                formRef={formRef}
                setFormRef={setFormRef}
                formKey='diabetes'
                steps={steps}
                question='Have you been diagnosed with diabetes?'
                errorText='Please make a selection'
                uiRefresh={uiRefresh}
                options={formOptions.SmokeOptions}
              />
            );
          case 9:
            return (
              <OptionForm
                key={steps.current}
                formRef={formRef}
                setFormRef={setFormRef}
                formKey='bloodPressureMeditation'
                steps={steps}
                question='Do you take medication for blood pressure?'
                errorText='Please make a selection'
                uiRefresh={uiRefresh}
                options={formOptions.SmokeOptions}
              />
            );
          case 10:
            return (
              <OptionForm
                key={steps.current}
                formRef={formRef}
                setFormRef={setFormRef}
                formKey='bloodPressureLevel'
                steps={steps}
                question='Do you know your blood pressure levels?'
                errorText='Please make a selection'
                uiRefresh={uiRefresh}
                options={formOptions.SmokeOptions}
                callback={handleBloodPressureLevel}
              />
            );
          case 11:
            let componentToRender;
            if (formRef['bloodPressureLevel']) {
              componentToRender = (
                <InputTextFrom
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='systolicBloodPressureLevel'
                  steps={steps}
                  question='What is your systolic blood pressure?'
                  label='This is the top number. Please enter a value between'
                  valueFormat={` mmHg`}
                  errorText='Please enter a value'
                  uiRefresh={uiRefresh}
                  limit={true}
                  minValue={70}
                  maxValue={228}
                  limitUnit='mmHg.'
                  errorCategory='SBL'
                />
              );
            } else {
              componentToRender = (
                <OptionForm
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='cholesterolLevel'
                  steps={steps}
                  question='Do you know your cholesterol levels?'
                  errorText='Please make a selection'
                  uiRefresh={uiRefresh}
                  options={formOptions.SmokeOptions}
                  callback={handleBloodPressureLevel}
                />
              );
            }
            return componentToRender;
          case 12:
            let componentToShow;
            if (formRef['bloodPressureLevel']) {
              componentToShow = (
                <InputTextFrom
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='diastolicBloodPressure'
                  steps={steps}
                  question='What is your diastolic blood pressure?'
                  label='This is the bottom number. Please enter a value between'
                  valueFormat={` mmHg`}
                  errorText='Please enter a value'
                  uiRefresh={uiRefresh}
                  limit={true}
                  minValue={50}
                  maxValue={150}
                  limitUnit='mmHg.'
                  errorCategory='DBL'
                  
                />
              );
              return componentToShow;
            }
            if (!formRef['bloodPressureLevel'] && formRef['cholesterolLevel']) {
              componentToShow = (
                <InputTextFrom
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='TotalCholesterolLevel'
                  steps={steps}
                  question='What is your total cholesterol level?'
                  label='Please enter a value between'
                  valueFormat={` mmol/L.`}
                  errorText='Please enter a value'
                  uiRefresh={uiRefresh}
                  limit={true}
                  minValue={2.0}
                  maxValue={10.5}
                  isDecimalAllowed={true}
                  limitUnit={`mmol/L.`}
                  errorCategory='TCL'
                />
              );
              return componentToShow;
            }
            if (!formRef['bloodPressureLevel'] && !formRef['cholesterolLevel']) {
              componentToShow = (
                <InputTextFrom
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='postalCode'
                  steps={steps}
                  question='Lastly, what is your postcode?'
                  label={`This helps us to understand Australia's heart health across regions and is completely anonymous`}
                  valueFormat={``}
                  errorText='Please fill this in'
                  uiRefresh={uiRefresh}
                  limit={false}

                />
              );
              return componentToShow;
            }

          case 13:
            let componentToVisible;
            if (!formRef['bloodPressureLevel'] && formRef['cholesterolLevel']) {
              componentToVisible = (
                <InputTextFrom
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='HBLCholesterolLevel'
                  steps={steps}
                  question='What is your HDL cholesterol?'
                  label='Please enter the value between'
                  valueFormat={` mmol/L`}
                  errorText='Please enter a value'
                  uiRefresh={uiRefresh}
                  limit={true}
                  minValue={0.1}
                  maxValue={6.4}
                  isDecimalAllowed={true}
                  limitUnit='mmol/L.'
                  errorCategory='HDL'
                />
              );
              return componentToVisible;
            }

            if (formRef['bloodPressureLevel']) {
              componentToVisible = (
                <OptionForm
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='cholesterolLevel'
                  steps={steps}
                  question='Do you know your cholesterol levels?'
                  errorText='Please make a selection'
                  uiRefresh={uiRefresh}
                  options={formOptions.SmokeOptions}
                  callback={handleBloodPressureLevel}
                />
              );
              return componentToVisible;
            }
            if (!formRef['bloodPressureLevel'] && !formRef['cholesterolLevel']) {
              return (
                <WantReportTab
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='wantReport'
                  steps={steps}
                  question=''
                  errorText='Please make a selection'
                  uiRefresh={uiRefresh}
                  options={formOptions.ReportOptions}
                  callback={handleBloodPressureLevel}
                />
              );
            }

          case 14:
            if (!formRef['bloodPressureLevel'] && !formRef['cholesterolLevel']) {
              if (formRef['wantReport']) {
                return (
                  <CustomInputText
                    key={steps.current}
                    formRef={formRef}
                    setFormRef={setFormRef}
                    formKey='firstName'
                    steps={steps}
                    question={`Great! Let's start with your `}
                    label={``}
                    boldWord={`first name`}
                    errorText='Please fill this in'
                    uiRefresh={uiRefresh}
                    limit={false}
                  />
                );
              } else {
                return (
                  <ResultTab
                    setFormRef={setFormRef}
                    key={steps.current}
                    uiRefresh={uiRefresh}
                    formRef={formRef}
                    steps={steps}
                    lookupTables={lookupTables}
                  />
                );
              }
            }
            if (
              (formRef['bloodPressureLevel'] && !formRef['cholesterolLevel']) ||
              (!formRef['bloodPressureLevel'] && formRef['cholesterolLevel'])
            ) {
              return (
                <InputTextFrom
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='postalCode '
                  steps={steps}
                  question='Lastly, what is your postcode?'
                  label={`This helps us to understand Australia’s heart health across regions and is completely anonymous`}
                  valueFormat={``}
                  errorText='Please fill this in'
                  uiRefresh={uiRefresh}
                  limit={false}
                />
              );
            }
            if (formRef['bloodPressureLevel'] && formRef['cholesterolLevel']) {
              return (
                <InputTextFrom
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='TotalCholesterolLevel'
                  steps={steps}
                  question='What is your total cholesterol level?'
                  label='Please enter a value between'
                  valueFormat={` mmol/L.`}
                  errorText='Please enter a value'
                  uiRefresh={uiRefresh}
                  limit={true}
                  minValue={2.0}
                  maxValue={10.5}
                  isDecimalAllowed={true}
                  limitUnit={`mmol/L.`}
                  errorCategory='TCL'
                />
              );
            }

          case 15:
            if (!formRef['bloodPressureLevel'] && !formRef['cholesterolLevel']) {
              return (
                <CustomInputText
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='lastName'
                  steps={steps}
                  question={`${formRef['firstName']}, what's your `}
                  label={``}
                  boldWord={`last name`}
                  errorText='Please fill this in'
                  uiRefresh={uiRefresh}
                  limit={false}
                />
              );
            }
            if (
              (formRef['bloodPressureLevel'] && !formRef['cholesterolLevel']) ||
              (!formRef['bloodPressureLevel'] && formRef['cholesterolLevel'])
            ) {
              return (
                <WantReportTab
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='wantReport'
                  steps={steps}
                  question=''
                  errorText='Please make a selection'
                  uiRefresh={uiRefresh}
                  options={formOptions.ReportOptions}
                  callback={handleBloodPressureLevel}
                />
              );
            }

            if (formRef['bloodPressureLevel'] && formRef['cholesterolLevel']) {
              return (
                <InputTextFrom
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='HBLCholesterolLevel'
                  steps={steps}
                  question='What is your HDL cholesterol?'
                  label='Please enter the value between'
                  valueFormat={` mmol/L`}
                  errorText='Please enter a value'
                  uiRefresh={uiRefresh}
                  limit={true}
                  minValue={0.1}
                  maxValue={6.4}
                  isDecimalAllowed={true}
                  limitUnit='mmol/L.'
                  errorCategory='HDL'
                />
              );
            }

          case 16:
            if (
              (formRef['bloodPressureLevel'] && !formRef['cholesterolLevel']) ||
              (!formRef['bloodPressureLevel'] && formRef['cholesterolLevel'])
            ) {
              if (formRef['wantReport']) {
                return (
                  <CustomInputText
                    key={steps.current}
                    formRef={formRef}
                    setFormRef={setFormRef}
                    formKey='firstName'
                    steps={steps}
                    question={`Great! Let's start with your `}
                    label={``}
                    boldWord={`first name`}
                    errorText='Please fill this in'
                    uiRefresh={uiRefresh}
                    limit={false}
                  />
                );
              } else {
                return (
                  <ResultTab
                    setFormRef={setFormRef}
                    key={steps.current}
                    uiRefresh={uiRefresh}
                    formRef={formRef}
                    steps={steps}
                    lookupTables={lookupTables}
                  />
                );
              }
            }
            if (!formRef['cholesterolLevel'] && !formRef['bloodPressureLevel']) {
              return (
                <CustomInputText
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='email'
                  steps={steps}
                  question={`What's the best email address for us to send your heart age report to, `}
                  label={``}
                  boldWord={`${formRef['firstName']}`}
                  placeholder='name@example.com'
                  errorText='Please enter a correct email'
                  uiRefresh={uiRefresh}
                  limit={false}
                />
              );
            }
            if (formRef['cholesterolLevel'] && formRef['bloodPressureLevel']) {
              return (
                <InputTextFrom
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='postalCode'
                  steps={steps}
                  question='Lastly, what is your postcode?'
                  label={`This helps us to understand Australia's heart health across regions and is completely anonymous`}
                  valueFormat={``}
                  errorText='Please fill this in'
                  uiRefresh={uiRefresh}
                  limit={false}
                  callback={handleFormRefresh}
                />
              );
            }
          case 17:
            if (
              (formRef['bloodPressureLevel'] && !formRef['cholesterolLevel']) ||
              (!formRef['bloodPressureLevel'] && formRef['cholesterolLevel'])
            ) {
              if (formRef['wantReport']) {
                return (
                  <CustomInputText
                    key={steps.current}
                    formRef={formRef}
                    setFormRef={setFormRef}
                    formKey='lastName'
                    steps={steps}
                    question={`${formRef['firstName']}, what's your `}
                    label={``}
                    boldWord={`last name`}
                    errorText='Please fill this in'
                    uiRefresh={uiRefresh}
                    limit={false}
                  />
                );
              }
            }
            if (!formRef['cholesterolLevel'] && !formRef['bloodPressureLevel']) {
              if (formRef['wantReport']) {
                return (
                  <PrivacyOptionForm
                    key={steps.current}
                    formRef={formRef}
                    setFormRef={setFormRef}
                    formKey='privacyAcceptance'
                    steps={steps}
                    question=''
                    errorText='Please agree to the terms & conditions'
                    uiRefresh={uiRefresh}
                    options={formOptions.PrivacyAcceptanceOptions}
                    callback={handleBloodPressureLevel}
                  />
                );
              } else {
                return (
                  <ResultTab
                    setFormRef={setFormRef}
                    key={steps.current}
                    uiRefresh={uiRefresh}
                    formRef={formRef}
                    steps={steps}
                    lookupTables={lookupTables}
                  />
                );
              }
            }

            if (formRef['cholesterolLevel'] && formRef['bloodPressureLevel']) {
              return (
                <WantReportTab
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='wantReport'
                  steps={steps}
                  question=''
                  errorText='Please make a selection'
                  uiRefresh={uiRefresh}
                  options={formOptions.ReportOptions}
                  callback={handleBloodPressureLevel}
                />
              );
            }
          case 18:
            if (
              (formRef['bloodPressureLevel'] && !formRef['cholesterolLevel']) ||
              (!formRef['bloodPressureLevel'] && formRef['cholesterolLevel'])
            ) {
              if (formRef['wantReport']) {
                return (
                  <CustomInputText
                    key={steps.current}
                    formRef={formRef}
                    setFormRef={setFormRef}
                    formKey='email'
                    steps={steps}
                    question={`What's the best email address for us to send your heart age report to, `}
                    label={``}
                    boldWord={`${formRef['firstName']}`}
                    placeholder='name@example.com'
                    errorText='Please enter a correct email'
                    uiRefresh={uiRefresh}
                    limit={false}
                  />
                );
              }
            }
            if (!formRef['cholesterolLevel'] && !formRef['bloodPressureLevel']) {
              return (
                <ResultTab
                  setFormRef={setFormRef}
                  key={steps.current}
                  uiRefresh={uiRefresh}
                  formRef={formRef}
                  steps={steps}
                  lookupTables={lookupTables}
                />
              );
            }
            if (formRef['cholesterolLevel'] && formRef['bloodPressureLevel']) {
              if (formRef['wantReport']) {
                return (
                  <CustomInputText
                    key={steps.current}
                    formRef={formRef}
                    setFormRef={setFormRef}
                    formKey='firstName'
                    steps={steps}
                    question={`Great! Let's start with your `}
                    label={``}
                    boldWord={`first name`}
                    errorText='Please fill this in'
                    uiRefresh={uiRefresh}
                    limit={false}
                  />
                );
              } else {
                return (
                  <ResultTab
                    setFormRef={setFormRef}
                    key={steps.current}
                    uiRefresh={uiRefresh}
                    formRef={formRef}
                    steps={steps}
                    lookupTables={lookupTables}
                  />
                );
              }
            }

          case 19:
            if (
              (formRef['bloodPressureLevel'] && !formRef['cholesterolLevel']) ||
              (!formRef['bloodPressureLevel'] && formRef['cholesterolLevel'])
            ) {
              if (formRef['wantReport']) {
                return (
                  <PrivacyOptionForm
                    key={steps.current}
                    formRef={formRef}
                    setFormRef={setFormRef}
                    formKey='privacyAcceptance'
                    steps={steps}
                    question=''
                    errorText='Please agree to the terms & conditions'
                    uiRefresh={uiRefresh}
                    options={formOptions.PrivacyAcceptanceOptions}
                    callback={handleBloodPressureLevel}
                  />
                );
              }
            }
            if (formRef['cholesterolLevel'] && formRef['bloodPressureLevel']) {
              return (
                <CustomInputText
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='lastName'
                  steps={steps}
                  question={`${formRef['firstName']}, what's your `}
                  label={``}
                  boldWord={`last name`}
                  errorText='Please fill this in'
                  uiRefresh={uiRefresh}
                  limit={false}
                />
              );
            }
          case 20:
            if (
              (formRef['bloodPressureLevel'] && !formRef['cholesterolLevel']) ||
              (!formRef['bloodPressureLevel'] && formRef['cholesterolLevel'])
            ) {
              if (formRef['wantReport']) {
                return (
                  <ResultTab
                    setFormRef={setFormRef}
                    key={steps.current}
                    uiRefresh={uiRefresh}
                    formRef={formRef}
                    steps={steps}
                    lookupTables={lookupTables}
                  />
                );
              }
            }
            if (formRef['cholesterolLevel'] && formRef['bloodPressureLevel']) {
              return (
                <CustomInputText
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='email'
                  steps={steps}
                  question={`What's the best email address for us to send your heart age report to, `}
                  label={``}
                  boldWord={`${formRef['firstName']}`}
                  placeholder='name@example.com'
                  errorText='Please enter a correct email'
                  uiRefresh={uiRefresh}
                  limit={false}
                />
              );
            }
          case 21:
            if (formRef['cholesterolLevel'] && formRef['bloodPressureLevel']) {
              return (
                <PrivacyOptionForm
                  key={steps.current}
                  formRef={formRef}
                  setFormRef={setFormRef}
                  formKey='privacyAcceptance'
                  steps={steps}
                  question=''
                  errorText='Please agree to the terms & conditions'
                  uiRefresh={uiRefresh}
                  options={formOptions.PrivacyAcceptanceOptions}
                  callback={handleBloodPressureLevel}
                />
              );
            }
          case 22:
            if (formRef['cholesterolLevel'] && formRef['bloodPressureLevel']) {
              return (
                <ResultTab
                  setFormRef={setFormRef}
                  key={steps.current}
                  uiRefresh={uiRefresh}
                  formRef={formRef}
                  steps={steps}
                  lookupTables={lookupTables}
                />
              );
            }
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default Tabs;
