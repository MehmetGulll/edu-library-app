import React from "react";

const IconX = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      className='icon icon-tabler icons-tabler-outline icon-tabler-x'
      height='24'
      width='24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M0 0h24v24H0z' fill='none' stroke='none' />
      <path d='M18 6l-12 12' />
      <path d='M6 6l12 12' />
    </svg>
  );
};

export default IconX;
