import React from 'react';

type Props = {
  title: string;
  desc: string;
  tags: Array<string>;
};

const AboutCard = ({ title, desc, tags }: Props) => {
  return (
    <div className="w-full xl:w-[600px] text-2xl space-y-4 rounded-xl xl:min-h-[250px] bg-dark-secondary px-6 py-8">
      <h3>{title}</h3>
      <p className="text-xs">{desc}</p>
      <div className="flex gap-2">
        {tags && tags.map((tag, id) => <Tag name={tag} key={id} />)}
      </div>
    </div>
  );
};

export default AboutCard;

const Tag = ({ name }: { name: string }) => (
  <div className="rounded-full border capitalize text-xs px-2 py-1 cursor-pointer">
    {name}
  </div>
);
