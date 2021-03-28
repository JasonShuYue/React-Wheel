import * as React from 'react';
import './importAll';
import './Icon.scss';

interface IIconProps {
  name: string;
}

const Icon: React.FC<IIconProps> = (props) => {
  return (
    <svg className="icon">
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

export default Icon;