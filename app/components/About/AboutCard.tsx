import React from 'react';

type Props = {
  title: string;
  desc?: string;
  list: Array<{ title: string; subtitle: string }>;
};

const AboutCard = ({ title, desc, list }: Props) => {
  return (
    <div className="w-full bgNoise xl:w-[500px] text-2xl space-y-4 rounded-xl xl:min-h-[250px] px-6 py-8">
      <h3>{title}</h3>
      {desc && <p className="text-base">{desc}</p>}
      <ul className="flex flex-col gap-2 list-disc">
        {list &&
          list.map(({ title, subtitle }, id) => (
            <Tag title={title} subtitle={subtitle} key={id} />
          ))}
      </ul>
    </div>
  );
};

export default AboutCard;

const Tag = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-white capitalize text-sm px-2 py-1 cursor-pointer">
    <li>
      {title}
      <br />
      <div className="text-gray-300 mix-blend-luminosity">
        {subtitle &&
          subtitle.split('{break}').map((item, id) => <p key={id}>{item}</p>)}
      </div>
    </li>
  </div>
);
