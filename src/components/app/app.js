import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ToggleButton from '../toggleButton';
import ErrorMesage from '../error';
import {CharacterPage, BooksPage, HousesPage, CharacterItem} from '../pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css';

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
           <Router>
                <div className="app"> 
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

                        
                        <Route path='/books' component={BooksPage}/>
                        <Route path='/houses' component={HousesPage}/>
                        <Route path='/characters' exact component={CharacterPage}/>
                        <Route path='/characters/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                                return <CharacterItem characterId={id}/>
                            }
                        } />
                    </Container>
                </div>
           </Router>
        );
    }   
}
