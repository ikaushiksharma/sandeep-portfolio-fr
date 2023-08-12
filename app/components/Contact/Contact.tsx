import React from 'react';
import HR from '../common/HR';
import VR from '../common/VR';
import Button from '../common/Button';

type Props = {};

const Contact = (props: Props) => {
  return (
    <div
      id="contact"
      className="lg:min-h-[90vh] flex flex-col justify-center items-center h-full w-full 2xl:px-16 xl:px-16 md:px-12 sm:px-2 px-4"
    >
      <div className="flex h-full flex-col">
        <div className="flex h-full py-12 flex-col lg:flex-row max-lg:items-center justify-evenly">
          <div className="flex flex-1 py-4 flex-col">
            <h1 className="text-xl capitalize font-extrabold lg:text-2xl">
              contact
            </h1>
            <p className="text-4xl uppercase lg:text-7xl">
              let&apos;s bring your brand to next level
            </p>
          </div>
          <VR classes="h-[70vh]" />
          <div className="max-h-[70vh] w-full lg:w-1/3">
            <div className="flex relative flex-col mt-4 space-y-10 items-end justify-center lg:justify-between lg:pb-12 h-full">
              <h4 className="text-xl lg:text-3xl">
                Together, let&apos;s elevate your brand to new heights by
                unleashing its full potential and captivating your target
                audience.
              </h4>
              <Button title="let's connect" />
            </div>
          </div>
        </div>
        <HR classes="w-full" />
      </div>
    </div>
  );
};

export default Contact;
