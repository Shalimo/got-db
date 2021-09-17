import React, {Component} from 'react';
import './randomChar.css';
import GotService from '../../services/gotService';

import Spinner from '../spinner/spinner';
import ErrorMesage from '../error';

export default class RandomChar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            char: {},
            loading: true,
            error: false
        }
        this.gotService = new GotService();
        console.log('constructor');
    }

    componentDidMount() {
        this.updateCharacter();
        this.timerId = setInterval(this.updateCharacter, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    updateCharacter = () => {
        const id = Math.floor(Math.random() * 140 + 25);
        this.gotService.getCharacter(id)
            .then((char) => {
                this.setState({
                    char: char,
                    loading: false
                })
            })
            .catch(() => {
                this.setState({
                    error: true,
                    loading: false
                })
            })
    }

    render() {
        console.log('render');
        const {char, loading, error} = this.state;

        const isSpinner = loading ? <Spinner/> : <View char={char}/>;
        const isError = error ? <ErrorMesage/> : null;    

        return (
            <div className="random-block rounded">
                {isError}
                {isSpinner}
            </div>
        );
    }
}

const View = ({char}) => {

    const {name, gender, born, died, culture} = char;

    return (
        <>
              <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
        </>
    )
}
