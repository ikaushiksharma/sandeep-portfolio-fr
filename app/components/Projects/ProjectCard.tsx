import React from 'react';

type Props = {};

const ProjectCard = (props: Props) => {
  return (
    <div className="w-full h-full space-y-2 px-2 xl:px-5">
      <div className="w-full overflow-hidden border rounded-xl bg-[#D9D9D9]">
        <img
          className=""
          src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
          alt=""
        />
      </div>
      <div className="w-full text-base xl:text-lg uppercase flex items-center justify-between">
        <h2 className="">Google App</h2>
        <p>2023</p>
      </div>
    </div>
  );
};

export default ProjectCard;
