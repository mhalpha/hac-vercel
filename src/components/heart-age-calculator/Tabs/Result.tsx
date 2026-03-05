'use client';
import React, { useEffect, SetStateAction, Dispatch, useState, useRef } from 'react';

import { LookupTables, MatchingScores } from '../../../../types/Global';
import { calculateGenderCategory } from '@/helpers/utils';
import Spinner from '../../../helpers/Spinner';
import { Fade } from 'react-awesome-reveal';

const Result = ({
  formRef,
  steps,
  uiRefresh,
  lookupTables,
}: {
  formRef: any;
  steps: React.MutableRefObject<number>;
  uiRefresh: Dispatch<SetStateAction<number>>;
  lookupTables: LookupTables;
}) => {
  const pageInit = useRef<boolean>(false);
  const hasMailSent = useRef(false);

  const [, uiSubRefresh] = useState(Date.now());
  const [matchingScores, setMatchingScores] = useState<MatchingScores>({
    age: 0,
    smoke: 0,
    history: 0,
    diabetes: 0,
    med: 0,
    sbp: 0,
    dbp: 0,
    totalCholesterol: 0,
    hdl: 0,
    final: 0,
  });

  useEffect(() => {
    pageInit.current = false;

    const {
      email,
      firstName,
      lastName,
      postalCode,
      sex,
      age,
      smoke,
      height,
      weight,
      heartDisease,
      diabetes,
      bloodPressureMeditation,
      bloodPressureLevel,
      systolicBloodPressureLevel,
      diastolicBloodPressure,
      cholesterolLevel,
      TotalCholesterolLevel,
      HBLCholesterolLevel,
      wantReport,
    } = formRef;

    const Age = parseInt(age);
    if (!Age || !lookupTables) return;

    const genderCategory = calculateGenderCategory(sex, Age);
    const getGC = (condition: boolean) =>
      genderCategory + (condition ? '-Yes' : '-No');

    const scoreAge = lookupTables.age?.[Age] ?? 0;
    const scoreSmoke = lookupTables.smoke?.[getGC(smoke)] ?? 0;
    const scoreHistory = lookupTables.history?.[getGC(heartDisease)] ?? 0;
    const scoreDiabetes = lookupTables.diabetes?.[getGC(diabetes)] ?? 0;
    const scoreMed =
      lookupTables.med?.[getGC(bloodPressureMeditation)] ?? 0;

    let scoreSbp = 0;

    if (bloodPressureLevel && systolicBloodPressureLevel) {
      scoreSbp =
        lookupTables.sbp?.[
          `${genderCategory}-${systolicBloodPressureLevel}`
        ] ?? 0;
    } else {
      const avgSBP =
        lookupTables.sbpAvg?.[`${sex}-${Age}`];
      if (avgSBP) {
        scoreSbp =
          lookupTables.sbp?.[
            `${genderCategory}-${avgSBP}`
          ] ?? 0;
      }
    }

    let scoreTotalCholesterol = 0;
    let scoreHdl = 0;

    if (cholesterolLevel && TotalCholesterolLevel && HBLCholesterolLevel) {
      scoreTotalCholesterol =
        lookupTables.cholesterol?.[
          `${genderCategory}-${parseFloat(TotalCholesterolLevel).toFixed(1)}`
        ] ?? 0;

      scoreHdl =
        lookupTables.hdl?.[
          `${genderCategory}-${parseFloat(HBLCholesterolLevel).toFixed(1)}`
        ] ?? 0;
    } else {
      const avgChol =
        lookupTables.cholesterolAvg?.[`${sex}-${Age}`];
      const avgHdl =
        lookupTables.hdlAvg?.[`${sex}-${Age}`];

      if (avgChol) {
        scoreTotalCholesterol =
          lookupTables.cholesterol?.[
            `${genderCategory}-${parseFloat(avgChol.toString()).toFixed(1)}`
          ] ?? 0;
      }

      if (avgHdl) {
        scoreHdl =
          lookupTables.hdl?.[
            `${genderCategory}-${parseFloat(avgHdl.toString()).toFixed(1)}`
          ] ?? 0;
      }
    }

    const finalScore =
      scoreAge +
      scoreSmoke +
      scoreHistory +
      scoreDiabetes +
      scoreMed +
      scoreSbp +
      scoreTotalCholesterol +
      scoreHdl;

    const computedFinalResult =
      Math.round(finalScore * 2) / 2;

    const heartAge =
      lookupTables.final?.[computedFinalResult] ?? 0;

    setMatchingScores({
      age: scoreAge,
      smoke: scoreSmoke,
      history: scoreHistory,
      diabetes: scoreDiabetes,
      med: scoreMed,
      sbp: scoreSbp,
      dbp: 0,
      totalCholesterol: scoreTotalCholesterol,
      hdl: scoreHdl,
      final: heartAge,
    });

    if (
      computedFinalResult !== 0 &&
      !isNaN(computedFinalResult) &&
      !hasMailSent.current
    ) {
      hasMailSent.current = true;

      const postData: Record<string, any> = {
        Age,
        Sex: sex,
        Smoke: smoke,
        Height: height,
        Weight: weight,
        HeartDisease: heartDisease,
        Diabetes: diabetes,
        BloodPressureMedication: bloodPressureMeditation,
        BloodPressureLevel: bloodPressureLevel,
        SystolicBloodPressureLevel:
          parseFloat(systolicBloodPressureLevel) || null,
        DiastolicBloodPressure:
          parseFloat(diastolicBloodPressure) || null,
        CholesterolLevel: cholesterolLevel,
        TotalCholesterolLevel:
          parseFloat(TotalCholesterolLevel) || null,
        HBLCholesterolLevel:
          parseFloat(HBLCholesterolLevel) || null,
        PostalCode: postalCode,
        HeartAge: heartAge,
        user_hac_category: heartAge < Age ? 'BELOW' : heartAge > Age ? 'ABOVE' : 'EQUAL',
        WantedReport: wantReport ? true : false,
        Email: wantReport ? email : null,
        FirstName: wantReport ? firstName : null,
        LastName: wantReport ? lastName : null,
      };

      fetch('/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      }).catch((error) => {
        console.error('Webhook error:', error);
      });
    }

    pageInit.current = true;
    uiSubRefresh(Date.now());
  }, [formRef, lookupTables]);

  if (!pageInit.current) {
    return (
      <div className='flex w-full h-full justify-center items-center'>
        <Spinner size='60' />
      </div>
    );
  }

  return (
    <Fade delay={100}>
      <h1 className='font-bold text-xl md:text-2xl text-center'>
        Your calculated results are...
      </h1>

      <div className="relative w-[12rem] h-[12rem] bg-[url('/Heart.png')] bg-contain bg-no-repeat text-white">
        <h1 className='text-center font-bold text-[4rem] absolute top-[25%] right-[32%]'>
          {matchingScores.final}
        </h1>
      </div>

      <div>
        {matchingScores.final < parseInt(formRef.age) && (
          <h6 className='text-center text-[#444444] font-semibold text-lg md:text-lg'>
            This is BELOW your actual age.<br /><br />
            There are many things you can do to improve your heart health.
            Consider speaking with your doctor about your results at your next
            appointment. If you are aged 45 and over and do not already have heart disease, we recommend you see your doctor for a Heart Health Check. Some people may be eligible earlier, including First Nations peoples from 30 years, and from 35 years for people living with diabetes.
          </h6>
        )}

        {matchingScores.final > parseInt(formRef.age) && (
          <h6 className='text-center text-[#444444] font-semibold text-lg md:text-lg'>
            This is ABOVE your actual age.<br /><br />
            There are many things you can do to improve your heart health.
            Consider speaking with your doctor about your results at your next
            appointment. If you are aged 45 and over and do not already have heart disease, we recommend you see your doctor for a Heart Health Check. Some people may be eligible earlier, including First Nations peoples from 30 years, and from 35 years for people living with diabetes.
          </h6>
        )}

        {matchingScores.final === parseInt(formRef.age) && (
          <h6 className='text-center text-[#444444] font-semibold text-lg md:text-lg'>
            This is EQUAL to your actual age.<br /><br />
            There are many things you can do to improve your heart health.
            Consider speaking with your doctor about your results at your next
            appointment. If you are aged 45 and over and do not already have heart disease, we recommend you see your doctor for a Heart Health Check. Some people may be eligible earlier, including First Nations peoples from 30 years, and from 35 years for people living with diabetes.
          </h6>
        )}
      </div>

      <div className='flex justify-center items-center gap-2'>
        <a
          href='https://www.healthdirect.gov.au/australian-health-services'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-red-main text-white font-bold px-6 rounded-3xl text-xl py-2 mt-4 inline-block'
        >
          Book a GP
        </a>
      </div>
    </Fade>
  );
};

export default Result;