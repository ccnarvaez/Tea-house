import { shallow } from "enzyme";
import React from "react";
import { Home } from "../../components/Home";

describe( 'Testing <Home /> component', () => {

    const wrapper = shallow( 
        <Home />
    );
    test('Should render properly', () => {
        expect( wrapper ).toMatchSnapshot();
    })
})