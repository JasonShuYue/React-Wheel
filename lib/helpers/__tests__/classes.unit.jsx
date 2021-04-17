import classess from '../classnames';

describe('classess', () =>{
  it('接受一个className', () => {
    const result = classess('a');
    expect(result).toEqual('a');
  });

  it('接受两个className', () => {
    const result = classess('a', 'b');
    expect(result).toEqual('a b');
  });

  it('接受undefined结果，不会出现undefined', () => {
    const result = classess('a', undefined);
    expect(result).toEqual('a');
  });

  it('接受各种奇怪值', () => {
    const result = classess('a', undefined, null, '中文');
    expect(result).toEqual('a 中文');
  });

  it('接受0个参数', () => {
    const result = classess();
    expect(result).toEqual('');
  })
})