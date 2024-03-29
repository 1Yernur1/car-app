'use client';

import { CustomButtonProps } from '@/types';
import Image from 'next/image';
import React from 'react';

function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled,
}: CustomButtonProps) {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      type={btnType || 'button'}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image className='object-contain' src={rightIcon} alt="right icon" fill />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
