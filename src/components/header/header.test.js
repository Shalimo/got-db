import React from "react";
import Header from './header';
import {shallow} from 'enzyme';

describe('Testing <Header/>', () => { // test suit - отдельный блок с тестом (описание, функция, которая выолняет тесты)
    it('Header have rendered correctly', () => { // test case (начинается с it)(описание, что будет происходить в кейсе)
        const header = shallow(<Header/>); // создаем компонент для тестировки
        expect(header).toMatchSnapshot(); // создаем снимок (слепок), как он визуально должен выглядеть
    })
});