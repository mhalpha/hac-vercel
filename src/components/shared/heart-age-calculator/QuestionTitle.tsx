import React from 'react';

const QuestionTitle = ({ question }: { question: string }) => {
  return <h1 className='text-2xl font-bold text-black'>{question}</h1>;
};

export default QuestionTitle;
