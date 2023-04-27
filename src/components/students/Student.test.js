import React from 'react';
import Students from './students';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Student from './student/student';
import Sinon from 'sinon';
Enzyme.configure({ adapter: new Adapter() });

const member=
    [
        {id: 1, name: "Leila", classNumber: 101, phoneNumber: 123, email: "li_rahmani@yahoo.com"},
        {id: 2, name: "Adam", classNumber: 101, phoneNumber: 6034, email: "Adam@yahoo.com"},
        {id: 3, name: "Nesta", classNumber: 202, phoneNumber: 988, email: "Nesta@yahoo.com"},
        {id: 4, name: "Nina", classNumber: 101, phoneNumber: 555, email: "Nina@yahoo.com"},
        {id: 5, name: "Pita", classNumber: 203, phoneNumber: 322, email: "Pita@yahoo.com"},
        {id: 6, name: "Arad", classNumber: 202, phoneNumber: 99, email: "Arad@yahoo.com"}
    ];

describe('<Students/>',()=>{
   it('renders number of student component',()=>{
        const spy=Sinon.spy();

       const wrapper=shallow(<Students studentList={member}
                                        deleteStudentHandler={spy}
                                        toggle={true}
                                        editStudentHandler={spy}
                                        nameChangeHandler={spy}
                                        classNumberChangeHandler={spy}
                                        phoneNumberChangeEventHandler={spy}
                                        emailChangeHandler={spy}/>);

        expect(wrapper.find(Student)).toHaveLength(member.length);
   })
})