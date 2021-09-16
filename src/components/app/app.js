import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ToggleButton from '../toggleButton';


export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        }
        this.toggle = () => {
            this.setState(({toggled}) => ({
                toggled : !toggled
            }))
        }
    }

    render() {
        const {toggled} = this.state;
        const isToggle = toggled ? <RandomChar/> : null

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                        <ToggleButton toggle={this.toggle}/>
                            {isToggle}
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }   
}
