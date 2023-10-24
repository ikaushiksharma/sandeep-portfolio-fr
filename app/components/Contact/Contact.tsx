import React from 'react';
import HR from '../common/HR';
import VR from '../common/VR';
import Button from '../common/Button';

type Props = {};

const Contact = (props: Props) => {
  return (
    <div
      id="contact"
      className="lg:min-h-[9vh] flex flex-col justify-center items-center h-full w-full 2xl:px-16 xl:px-16 md:px-12 sm:px-2 px-4"
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
            <div className="flex relative flex-col mt-4 space-y-10 justify-center lg:justify-between lg:pb-12 h-full">
              <ul className="text-xl lg:text-3xl">
                <li className="flex items-end gap-4 my-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  </svg>
                  <a href="tel:+91 7982971827">+91 7982971827</a>
                </li>

                <li className="flex items-end gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-inbox"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M4 13h3l3 3h4l3 -3h3"></path>
                  </svg>
                  <a href="mailto:san297376@gmail.com">san297376@gmail.com</a>
                </li>
                <li className="flex items-center gap-4 my-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-home-2 scale-125"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                    <path d="M10 12h4v4h-4z"></path>
                  </svg>
                  <p>166, Gopal Park, Chander Nagar, Delhi-51 </p>
                </li>
              </ul>
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
