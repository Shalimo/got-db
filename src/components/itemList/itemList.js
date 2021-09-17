import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner/spinner';

import GotService from '../../services/gotService';

export default class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            charList: null
        }
        this.gotService = new GotService();
    }

    componentDidMount() {
        this.updateCharList();
    }

    updateCharList() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList: charList
                })
            })
    }

    renderItems(array) {
        return array.map((item, i) => {
            return (
                <li 
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(41 + i)}>
                    {item.name}
                </li>
            )
        })
    }

    render() {

        const {charList} = this.state;

        if (!charList) {
            return <Spinner/>
        }

        const listItems = this.renderItems(charList);

        return (
            <ul className="item-list list-group">
                {listItems}
            </ul>
        );
    }
}