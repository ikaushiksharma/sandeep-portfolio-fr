import React from 'react';
import HR from '../common/HR';
import VR from '../common/VR';
import Button from '../common/Button';
import ProjectCard from './ProjectCard';

type Props = {};

const Projects = (props: Props) => {
  return (
    <div
      id="projects"
      className="lg:min-h-[90vh] flex flex-col justify-center h-full w-full 2xl:px-16 xl:px-16 md:px-12 sm:px-2 px-4"
    >
      <div className="flex flex-col">
        <div className="flex py-6 lg:py-12 flex-col lg:flex-row max-lg:items-center justify-evenly">
          <div className="flex py-4 max-w-[420px] min-h-full px-4 flex-col">
            <h1 className="text-xl uppercase font-extrabold lg:text-2xl">
              featured works
            </h1>
            <p className="text-base lg:text-xl">
              Showcasing our standout projects that blend creativity, strategy,
              and cutting-edge design.
            </p>
            <div className="py-2">
              <Button title="see all projects" />
            </div>
          </div>
          <VR />
          <div className="flex-1">
            <div className="flex relative gap-y-10 flex-col h-full justify-center">
              <div className="w-full pb-4 h-full">
                <ProjectCard />
              </div>
              <HR classes="w-full" />
              <div className="flex flex-row flex-auto">
                <div className="w-1/2 h-full">
                  <ProjectCard />
                </div>
                <VR />
                <div className="w-1/2 h-full">
                  <ProjectCard />
                </div>
              </div>
              <HR classes="w-full" />
              <div className="flex flex-row flex-auto">
                <div className="w-1/2 h-full">
                  <ProjectCard />
                </div>
                <VR />
                <div className="w-1/2 h-full">
                  <ProjectCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HR classes="w-full" />
    </div>
  );
};

export default Projects;
