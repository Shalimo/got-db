import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ToggleButton from '../toggleButton';
import ErrorMesage from '../error';


export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
            selectedChar: null, // какой персонаж выбран в данный момент
            error: false
        }
        this.toggle = () => {
            this.setState(({toggled}) => ({
                toggled : !toggled
            }))
        }
        this.onCharSelected = (id) => {
            this.setState({selectedChar: id}) // id подтягивается из i в itemList (номер в персонажа в массиве)
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
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected} />
                        </Col>
                        <Col md='6'>
                            {/* передаем id */}
                            <CharDetails charId={this.state.selectedChar}/> 
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }   
}
