import React from 'react';
import BackDrop from './BackDrop';
import Enzyme,{ mount,shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Sinon from 'sinon';
Enzyme.configure({ adapter: new Adapter() });

describe('<BackDrop/>',()=>{
    it('if show props is hide then render null',()=>{
        const wrapper=shallow(<BackDrop />);
        expect(wrapper.equals(null)).toEqual(true);
    })

    it('render sth',()=>{
      const wrapper  =shallow(<BackDrop/>);
        wrapper.setProps({show:true});
        expect(wrapper.find('.BackDrop').exists()).toEqual(true);
    })
})