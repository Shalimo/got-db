import React, {Component} from 'react';
import './itemDetails.css';

import GotService from '../../services/gotService';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {Field};

export default class ItemDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: null
        }
        this.gotService = new GotService();
    }

    componentDidMount() {
        this.updateCharacter();
    }

    componentDidUpdate(prevProps) { // предыдущие пропсы, что были в компоненте 
        if (this.props.itemId !== prevProps.itemId) {
            this.updateCharacter();
        }
    }

    updateCharacter() {
        const {itemId} = this.props;
        const {getData} = this.props;
        if (!itemId) {
            return;
        }

        // this.gotService.getCharacter(charId)
        getData(itemId)
            .then((item) => {
                this.setState({item: item})
            })
    }

    render() {

        const {item} = this.state;  
        

        if (!item) {
            return (
                <span className="select-error">Please, select a character</span>
            )
        }

        const {name} = item;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}