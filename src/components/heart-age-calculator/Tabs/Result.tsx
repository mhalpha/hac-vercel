'use client';
import React, { useEffect, SetStateAction, Dispatch, useState, useRef } from 'react';

import { LookupTables, MatchingScores } from '../../../../types/Global';
import { calculateGenderCategory } from '@/helpers/utils';
import Spinner from '../../../helpers/Spinner';
import { Fade } from 'react-awesome-reveal';
import axios from 'axios';

const Result = ({
  formRef,
  steps,
  uiRefresh,
  lookupTables,
  handleRestartClick,
}: {
  formRef: any;
  steps: React.MutableRefObject<number>;
  uiRefresh: Dispatch<SetStateAction<number>>;
  lookupTables: LookupTables;
  handleRestartClick: () => void;
}) => {
  const pageInit = useRef<boolean>(false);
  const [, uiSubRefresh] = useState(Date.now());
  const [finalResult, setFinalResult] = useState(0);
  const hasMailSent = React.useRef(false);

  //To Store Value and do calculation at the end
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

  //For Essentials
  const [userInformation, setUserInformation] = useState<{
    knowBloodPressure: any;
    knowCholesterol: any;
    genderCategory: any;
    selectedGender: any;
  }>({
    knowBloodPressure: '',
    knowCholesterol: '',
    genderCategory: null,
    selectedGender: '',
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
      privacyAcceptance,
    } = formRef;
    let Age = parseInt(age);
    setUserInformation((prevUserInfo) => ({
      ...prevUserInfo,
      selectedGender: sex,
      genderCategory: calculateGenderCategory(sex, Age),
    }));
    const getGenderConcatenatedValue = (condition: boolean) =>
      userInformation.genderCategory + (condition ? '-Yes' : '-No');
    setMatchingScores((prevMatchingScoreInfo) => ({
      ...prevMatchingScoreInfo,
      age: lookupTables.age[Age],
      smoke: lookupTables.smoke[getGenderConcatenatedValue(smoke)],
      history: lookupTables.history[getGenderConcatenatedValue(heartDisease)],
      diabetes: lookupTables.diabetes[getGenderConcatenatedValue(diabetes)],
      med: lookupTables.med[getGenderConcatenatedValue(bloodPressureMeditation)],
    }));
    if (!bloodPressureLevel) {
      const avgMatchingSBP =
        lookupTables.sbpAvg[userInformation.selectedGender + '-' + Age];
      const concatenatedCategorySBP =
        userInformation.genderCategory + '-' + avgMatchingSBP;
      setMatchingScores((prevMatchingScoreInfo) => ({
        ...prevMatchingScoreInfo,
        sbp: lookupTables.sbp[concatenatedCategorySBP],
      }));
    }
    if (bloodPressureLevel) {
      setMatchingScores((prevMatchingScoreInfo) => ({
        ...prevMatchingScoreInfo,
        sbp: lookupTables.sbp[
          userInformation.genderCategory + '-' + systolicBloodPressureLevel
        ],
      }));
    }

    if (!cholesterolLevel) {
      let concatenatedCategoryCholesterol = userInformation.selectedGender + '-' + Age;
      const averageTotalCholesterolValue =
        lookupTables.cholesterolAvg[concatenatedCategoryCholesterol];
      const averageHDLCholesterolValue =
        lookupTables.hdlAvg[concatenatedCategoryCholesterol];
      setMatchingScores((prevMatchingScoreInfo) => ({
        ...prevMatchingScoreInfo,
        totalCholesterol:
          lookupTables.cholesterol[
            userInformation.genderCategory +
              '-' +
              parseFloat(averageTotalCholesterolValue?.toString()).toFixed(1)
          ],
        hdl: lookupTables.hdl[
          userInformation.genderCategory +
            '-' +
            parseFloat(averageHDLCholesterolValue?.toString()).toFixed(1)
        ],
      }));
    }
    //Doubt
    if (cholesterolLevel) {
      setMatchingScores((prevMatchingScoreInfo) => ({
        ...prevMatchingScoreInfo,
        totalCholesterol:
          lookupTables.cholesterol[
            userInformation.genderCategory +
              '-' +
              parseFloat(TotalCholesterolLevel).toFixed(1)
          ],
        hdl: lookupTables.hdl[
          userInformation.genderCategory +
            '-' +
            parseFloat(HBLCholesterolLevel).toFixed(1)
        ],
      }));
    }
    const finalScore =
      parseFloat(matchingScores?.age?.toString()) +
      parseFloat(matchingScores?.totalCholesterol?.toString()) +
      parseFloat(matchingScores?.diabetes?.toString()) +
      parseFloat(matchingScores?.hdl?.toString()) +
      parseFloat(matchingScores?.history?.toString()) +
      parseFloat(matchingScores?.med?.toString()) +
      parseFloat(matchingScores?.sbp?.toString()) +
      parseFloat(matchingScores?.smoke?.toString());
    setFinalResult(Math.round(finalScore * 2) / 2);
    setMatchingScores((prevMatchingScoreInfo) => ({
      ...prevMatchingScoreInfo,
      final: lookupTables.final[finalResult],
    }));
    if (finalResult !== 0 && !isNaN(finalResult)) {
      if (lookupTables.final[finalResult] !== formRef.age && !hasMailSent.current) {
        hasMailSent.current = true;

        console.log(lookupTables.final[finalResult]);
        const apiUrl =
          'https://prod-07.australiasoutheast.logic.azure.com:443/workflows/7029692bc9c7478bb177c7f2669e5f40/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=yX289pvxnzb74V5Mmc-zBFyDiYJMB62bN9wZkcmCwrE';
        const postData = {
          Age: parseInt(age),
          Sex: sex,
          Smoke: smoke,
          Height: height,
          Weight: weight,
          HeartDisease: heartDisease,
          Diabetes: diabetes,
          BloodPressureMeditation: bloodPressureMeditation,
          SystolicBloodPressureLevel: parseFloat(systolicBloodPressureLevel),
          DiastolicBloodPressure: parseFloat(diastolicBloodPressure),
          CholesterolLevel: cholesterolLevel,
          TotalCholesterolLevel: parseFloat(TotalCholesterolLevel),
          HBLCholesterolLevel: parseFloat(HBLCholesterolLevel),
          Email: email,
          FirstName: firstName,
          LastName: lastName,
          PostalCode: postalCode,
          HeartAge: lookupTables.final[finalResult],
          WantedReport: wantReport ? true : false,
        };
        (async () => {
          await axios
            .post(apiUrl, postData)
            .then((response) => {
              console.log('Response:', response.data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        })();
      }
    }
    pageInit.current = true;
    uiSubRefresh(Date.now());
    uiRefresh(Date.now());
    //eslint-disable-next-line
  }, [
    formRef,
    finalResult,
    lookupTables,
    uiRefresh,
    steps,
    userInformation.genderCategory,
    userInformation.selectedGender,
  ]);
  if (!pageInit.current) {
    return (
      <div className='flex w-full h-full justify-center items-center'>
        <Spinner size='60' />
      </div>
    );
  } else {
    return (
      <Fade delay={100}>
        <h1 className='font-bold text-xl md:text-2xl text-center '>
          Your calculated results are...
        </h1>
        <div
          className={`relative w-[12rem] h-[12rem] bg-[url('/Heart.png')] bg-contain bg-no-repeat text-white`}>
          <h1 className='text-center text-white font-bold text-[4rem] absolute top-[25%] right-[32%]'>
            {matchingScores.final}
          </h1>
        </div>
        <div>
          {matchingScores.final < parseInt(formRef.age) && (
            <h6 className='text-center text-[#444444] font-semibold text-lg  md:text-lg'>
              This is BELOW your actual age. <br></br>
              <br /> There are many things you can do to improve your heart health.
              Consider speaking with your doctor about your results at your next
              appointment. If you are aged 45 and over and do not already have heart disease, we recommend you see your doctor for a Heart Health Check. Some people may be eligible earlier, including First Nations peoples from 30 years, and from 35 years for people living with diabetes.
            </h6>
          )}
          {matchingScores.final > parseInt(formRef.age) && (
            <h6 className='text-center text-[#444444] font-semibold text-lg  md:text-lg'>
              This is ABOVE your actual age.<br></br>
              <br /> There are many things you can do to improve your heart health.
              Consider speaking with your doctor about your results at your next
              appointment. If you are aged 45 and over and do not already have heart disease, we recommend you see your doctor for a Heart Health Check. Some people may be eligible earlier, including First Nations peoples from 30 years, and from 35 years for people living with diabetes.
            </h6>
          )}
          {matchingScores.final === parseInt(formRef.age) && (
            <h6 className='text-center text-[#444444] font-semibold text-lg  md:text-lg'>
              This is EQUAL to your actual age.<br></br>
              <br /> There are many things you can do to improve your heart health.
              Consider speaking with your doctor about your results at your next
              appointment. If you are aged 45 and over and do not already have heart disease, we recommend you see your doctor for a Heart Health Check. Some people may be eligible earlier, including First Nations peoples from 30 years, and from 35 years for people living with diabetes.
            </h6>
          )}
        </div>
        <div className='flex justify-center items-center gap-2 '>
          <button
            onClick={handleRestartClick}
            className='bg-red-main text-white font-bold px-6 rounded-3xl text-xl py-2 mt-4'>
            Restart
          </button>
        </div>
      </Fade>
    );
  }
};

export default Result;
