import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from './icon/Icon';

const fn: React.MouseEventHandler = (e) => {
  console.log(e)
  console.log(e.currentTarget)
}

ReactDOM.render(<Icon name="wechat" onClick={fn} />, document.querySelector('#root'));