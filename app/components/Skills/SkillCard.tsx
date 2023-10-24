import React, { ReactNode } from 'react';
import VR from '../common/VR';

type Props = {
  title: string;
  list: Array<string>;
  icon: React.ReactNode;
};

const SkillCard = ({ title, list, icon }: Props) => {
  return (
    <div className="text-2xl xl:border-white xl:odd:border-r w-full xl:min-h-[220px] aspect-video px-3 xl:px-6 py-2 xl:py-4">
      <div className="flex gap-2 h-full w-full">
        <div className="h-fit md:scale-150">{icon}</div>
        <div className="flex-1 flex-col gap-y-2 flex items-center">
          <div className="text-xl xl:text-2xl w-full uppercase">{title}</div>
          <div className="text-sm xl:text-base w-full xl:leading-tight">
            <ul className="list-disc">
              {list.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
