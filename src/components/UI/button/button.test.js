import React from 'react';
import Button from './button';
import Enzyme,{ mount,shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Sinon from 'sinon';
Enzyme.configure({ adapter: new Adapter() });

it('<Button/>',()=>{
   const spy=Sinon.spy();
    const wrapper=shallow(<Button clicked={spy}>click</Button>);

    wrapper.find('button').first().simulate('click');
    expect(spy.calledOnce).toBe(true);
})