import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

const ArrowButton = ({ icon: Icon, className = 'text-white', ...props }: Button) => {
  return (
    <button
      {...props}
      className={`bg-red-main p-2 hover:bg-red-white rounded-full ${className} `}>
      <Icon />
    </button>
  );
};

export default ArrowButton;
