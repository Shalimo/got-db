import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemList: null
        }
    }

    componentDidMount() {
        this.updateCharList();
    }

    updateCharList() {

        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList: itemList
                })
            })
    }

    renderItems(array) {
        return array.map((item, i) => {

            const render = this.props.renderItem(item);

            return (
                <li 
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(41 + i)}>
                    {render}
                </li>
            )
        })
    }

    render() {

        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>
        }

        const listItems = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {listItems}
            </ul>
        );
    }
}