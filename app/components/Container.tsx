import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <main className="flex flex-col border text-white border-white w-full h-full bg-dark-base">
      {children}
    </main>
  );
};

export default Container;
