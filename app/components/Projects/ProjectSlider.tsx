'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ProjectCard from './ProjectCard';
import { projects } from '@/lib/utils/data';

export default function ProjectSlider() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Autoplay]}
        className="max-w-[80vw] md:max-w-[55vw]"
      >
        {projects.map((project, id) => (
          <SwiperSlide key={id}>
            <ProjectCard
              title={project.title}
              desc={project.desc}
              playStore={project.playStore}
              ios={project.ios}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
