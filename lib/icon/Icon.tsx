import * as React from 'react';
import './importAll';
import './Icon.scss';

interface IIconProps {
  name: string;
  onClick?: React.MouseEventHandler<SVGElement>;
}

const Icon: React.FC<IIconProps> = (props) => {
  return (
    <svg className="icon" onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

export default Icon;