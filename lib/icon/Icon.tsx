import * as React from 'react';
import './importAll';
import './Icon.scss';
import classnames from '../helpers/classnames';

interface IIconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FC<IIconProps> = (props) => {
  const { className, name, ...restProps } = props;
  return (
    <svg className={classnames('icon', className)} {...restProps}>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

export default Icon;