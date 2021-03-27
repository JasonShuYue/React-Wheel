import * as React from 'react';
import wechat from '../icons/wechat.svg';


interface IIconProps {
  name: string;
}

const Icon: React.FC<IIconProps> = (props) => {
  return <span>
    {props.name}
  </span>
};

export default Icon;