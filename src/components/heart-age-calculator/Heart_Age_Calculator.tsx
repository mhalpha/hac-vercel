'use client';
import React, { useEffect, useState } from 'react';
import Wrapper from '../shared/Wrapper';
import { LookupTables, formList } from '../../../types/Global';
import Tabs from './Tabs';
import ageLookUp from '../shared/LookUpTables/ageLookup';
import smokeLookUp from '../shared/LookUpTables/smokeLookup';
import historyLookUp from '../shared/LookUpTables/historyLookup';
import diabetesLookUp from '../shared/LookUpTables/diabetesLookup';
import medLookUp from '../shared/LookUpTables/medLookup';
import finalLookUp from '../shared/LookUpTables/finalLookup';
import cholesterolLookUp from '../shared/LookUpTables/cholesterolLookup';
import cholesterolLookUpAvg from '../shared/LookUpTables/cholesterolLookupAvg';
import hdlLookUp from '../shared/LookUpTables/hdlLookup';
import hdlLookUpAvg from '../shared/LookUpTables/hdlLookupAvg';
import sbpLookUp from '../shared/LookUpTables/sbpLookup';
import sbpLookUpAvg from '../shared/LookUpTables/sbpLookupAvg';
import { Progress } from '@nextui-org/react';

const Heart_Age_Calculator: React.FC = () => {
  const steps = React.useRef<number>(0);
  const [totalNumberOfSteps, setTotalNumberOfSteps] = useState<number>(13);
  const [, uiRefresh] = React.useState(Date.now());
  const [formRef, setFormRef] = React.useState<formList>({
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
    firstName: null,
    lastName: null,
    email: null,
  });

  const [lookupTables, setLookupTables] = useState<LookupTables>({
    age: {},
    smoke: {},
    history: {},
    diabetes: {},
    med: {},
    cholesterol: {},
    cholesterolAvg: {},
    hdl: {},
    hdlAvg: {},
    sbp: {},
    sbpAvg: {},
    final: {},
  });

  useEffect(() => {
    setLookupTables((prevLookupTables) => ({
      ...prevLookupTables,
      age: ageLookUp,
      smoke: smokeLookUp,
      history: historyLookUp,
      diabetes: diabetesLookUp,
      med: medLookUp,
      cholesterol: cholesterolLookUp,
      cholesterolAvg: cholesterolLookUpAvg,
      hdl: hdlLookUp,
      hdlAvg: hdlLookUpAvg,
      sbp: sbpLookUp,
      sbpAvg: sbpLookUpAvg,
      final: finalLookUp,
    }));
  }, []);

  useEffect(() => {
 
    if (formRef.cholesterolLevel && formRef.bloodPressureLevel) {
      setTotalNumberOfSteps(17);
    } else if (formRef.cholesterolLevel || formRef.bloodPressureLevel) {
      setTotalNumberOfSteps(15);
    } else {
      setTotalNumberOfSteps(13);
    }
  }, [formRef.cholesterolLevel, formRef.bloodPressureLevel]);

  return (
    <Wrapper Style='w-full h-[calc(100vh-80px)] pt-2 md:pt-4'>
      <div className='w-full h-full md:overflow-hidden flex flex-col justify-center'>
        <article className='w-full p-4 pb-0 md:p-4 space-y-4 md:space-y-12'>
          <div className='w-full flex justify-center md:max-w-[70%] mx-auto'>
            {steps.current > 0 &&
              !formRef.heartAttack &&
              steps.current <= totalNumberOfSteps && (
                <Progress
                  label={`Discover your heart's age`}
                  classNames={{
                    base: 'w-full',
                    track: 'drop-shadow-md border bg-grey-light border-default',
                    indicator: 'bg-red-main',
                    label: 'tracking-wider font-medium text-default-600 text-black',
                    value: 'text-foreground/60 text-black',
                  }}
                  color='default'
                  aria-label='Loading...'
                  value={(steps.current / totalNumberOfSteps) * 100}
                  showValueLabel={true}
                />
              )}
          </div>
          <Tabs
            steps={steps}
            uiRefresh={uiRefresh}
            formRef={formRef}
            setFormRef={setFormRef}
            lookupTables={lookupTables}
          />
        </article>
      </div>
    </Wrapper>
  );
};

export default Heart_Age_Calculator;