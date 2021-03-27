import * as React from 'react';
import './importAll';

interface IIconProps {
  name: string;
}

const Icon: React.FC<IIconProps> = (props) => {
  return <span>
    <svg>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  </span>
};

export default Icon;