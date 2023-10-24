import { projects } from '@/lib/utils/data';
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  desc: string;
  playStore: string;
  ios: string;
};

const ProjectCard = (project: Props) => {
  return (
    <div className="my-auto space-y-2 px-1 md:px-4">
      <div className="w-full overflow-hidden rounded-xl bg-[#D9D9D9]">
        <img
          src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
          alt=""
        />
      </div>
      <div className="w-full text-sm xl:text-lg uppercase flex items-center justify-between">
        <h2>{project.title}</h2>
        <div className="flex">
          <Link href={project.playStore}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-google-play"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 3.71v16.58a.7 .7 0 0 0 1.05 .606l14.622 -8.42a.55 .55 0 0 0 0 -.953l-14.622 -8.419a.7 .7 0 0 0 -1.05 .607z"></path>
              <path d="M15 9l-10.5 11.5"></path>
              <path d="M4.5 3.5l10.5 11.5"></path>
            </svg>
          </Link>
          <Link href={project.ios}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-apple"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z"></path>
              <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
