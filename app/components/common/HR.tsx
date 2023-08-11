import React from 'react';

type Props = {
  classes?: string;
};

const HR = ({ classes = '' }: Props) => {
  return <div className={'mx-auto border border-white ' + classes}></div>;
};

export default HR;
