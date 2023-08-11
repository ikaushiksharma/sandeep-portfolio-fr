import React, { ReactNode } from 'react';
import VR from '../common/VR';

type Props = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const SkillCard = ({ title, desc, icon }: Props) => {
  return (
    <div className="xl:min-w-[200px] text-2xl xl:border-white xl:odd:border-r xl:min-h-[220px] px-3 xl:px-6 py-2 xl:py-4">
      <div className="flex gap-2 h-full w-full">
        <div>{icon}</div>
        <div className="flex-1 flex-col gap-y-2 flex items-center justify-center">
          <div className="text-xl xl:text-2xl w-full uppercase">{title}</div>
          <div className="text-sm xl:text-base xl:leading-tight">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
