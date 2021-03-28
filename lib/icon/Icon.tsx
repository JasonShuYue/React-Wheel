import * as React from 'react';
import './importAll';
import './Icon.scss';

interface IIconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FC<IIconProps> = (props) => {
  return (
    <svg className="icon" {...props}>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

export default Icon;