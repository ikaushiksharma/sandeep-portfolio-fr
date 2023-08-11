'use client';
import React from 'react';
type Props = {
  children: React.ReactNode;
};
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

const Container = ({ children }: Props) => {
  return (
    <main className="flex flex-col border text-white border-white w-full h-full bg-dark-base">
      {children}
      <AnimatedCursor
        color="256,256,256"
        innerSize={8}
        innerStyle={{ backgroundColor: 'black' }}
        outerSize={40}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={1}
        outerStyle={{
          mixBlendMode: 'exclusion',
        }}
      />
    </main>
  );
};

export default Container;
