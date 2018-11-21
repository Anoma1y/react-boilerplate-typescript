import React from 'react';
import { shallow } from 'enzyme';
import Img from '../index';

const src = 'test.png';
const alt = 'test';
const Component = props => shallow(<Img src={src} alt={alt} {...props} />);

describe('<Img />', () => {
  it('should render an \'img\' tag', () => {
    const renderedComponent = Component();

    expect(renderedComponent.is('img')).toBe(true);
  });

  it('should have an src attribute', () => {
    const renderedComponent = Component();

    expect(renderedComponent.prop('src')).toEqual(src);
  });

  it('should have an alt attribute', () => {
    const renderedComponent = Component();

    expect(renderedComponent.prop('alt')).toEqual(alt);
  });

  it('should not have a className attribute', () => {
    const renderedComponent = Component();

    expect(renderedComponent.prop('className')).toBeUndefined();
  });

  it('should set a className attribute', () => {
    const className = 'test-class';
    const renderedComponent = Component({ className });

    expect(renderedComponent.prop('className')).toEqual(className);
  });

  it('should has a className attribute', () => {
    const className = 'test-class';
    const renderedComponent = Component({ className });

    expect(renderedComponent.hasClass(className)).toBe(true);
  });

  it('should not have an attribute \'srcs\'', () => {
    const srcs = 'test.1.png';
    const renderedComponent = Component({ srcs });

    expect(renderedComponent.prop('srcs')).toBeUndefined();
  });
});
