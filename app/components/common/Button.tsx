import React from 'react';

type Props = {
  title: string;
};

const Button = ({ title }: Props) => {
  return <button className="uppercase bg-white text-dark-base font-extrabold text-sm sm:text-base py-1 sm:py-2 px-2 sm:px-4 rounded-lg" >{title}</button>;
};

export default Button;
