import React, { InputHTMLAttributes } from 'react';

const TextInput = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={`border-b-2 border-grey-light focus:border-black outline-none py-1 text-2xl md:text-5xl ${className} 
   `}
    />
  );
};

export default TextInput;
