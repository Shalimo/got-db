import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ToggleButton from '../toggleButton';
import ErrorMesage from '../error';
import {CharacterPage, BooksPage, HousesPage} from '../pages';


export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
            error: false
        }
        this.toggle = () => {
            this.setState(({toggled}) => ({
                toggled : !toggled
            }))
        }
    }

    componentDidCatch() {
        console.log('error');
        this.setState({error: true})
    }

    render() {
        const {toggled, error} = this.state;
        const isToggle = toggled ? <RandomChar/> : null
        
        if (error) {
            return (
                <ErrorMesage/>
            )
        }

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
                    <CharacterPage/>
                    <BooksPage/>
                    <HousesPage/> 
                </Container>
            </>
        );
    }   
}
