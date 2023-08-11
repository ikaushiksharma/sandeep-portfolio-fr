import React from 'react';

type Props = {
  classes?: string;
};

const HR = ({ classes = '' }: Props) => {
  return <div className={classes + ' mx-auto w-[90%] h-0.5 bg-white'}></div>;
};

export default HR;
