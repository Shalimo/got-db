import React from "react";
import RandomChar from "./randomChar";
import {shallow} from 'enzyme';

describe('Testing <RandomChar/>', () => {
    const char = shallow(<RandomChar/>); 
    describe('Testing snap & state', () => {
        it('RandomChar have rendered correctly', () => { // test case (начинается с it)(описание, что будет происходить в кейсе) // создаем компонент для тестировки
            expect(char).toMatchSnapshot(); // создаем снимок (слепок), как он визуально должен выглядеть
        });
        
        it('RandomChar state "char" is empty object', () => { // test case (начинается с it)(описание, что будет происходить в кейсе)
             // создаем компонент для тестировки
            expect(char.state().char).toBeObject(); // создаем снимок (слепок), как он визуально должен выглядеть
        });
    });

    describe('Handlers tests', () => {
        it('Testing updateCharacter', () => {
            char.instance().updateCharacter();
            expect(char.state().loading).toBeFalsy();

        })
    })
});