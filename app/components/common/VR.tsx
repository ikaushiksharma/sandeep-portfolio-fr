type Props = {
  classes?: string;
};

const VR = ({ classes }: Props) => {
  return (
    <div className={'max-lg:hidden border mx-10 border-white ' + classes} />
  );
};

export default VR;
