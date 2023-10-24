type Props = {
  classes?: string;
};

const VR = ({ classes }: Props) => {
  return (
    <div className={'max-lg:hidden border border-white ' + classes} />
  );
};

export default VR;
