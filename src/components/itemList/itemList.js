import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner/spinner';

class ItemList extends Component {

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

        const {data} = this.props;

        const listItems = this.renderItems(data);

        return (
            <ul className="item-list list-group">
                {listItems}
            </ul>
        );
    }
}

const withData = (View) => {
    return class extends Component {

        constructor(props) {
            super(props);
            this.state = {
                data: null
            }
        }
    
        componentDidMount() {
            this.updateCharList();
        }
    
        updateCharList() {
    
            const {getData} = this.props;
    
            getData()
                .then((data) => {
                    this.setState({
                        data: data
                    })
                })
        }

        render() {

            const {data} = this.state;

            if (!data) {
                return <Spinner/>
            }

            return (<View {...this.props} data={data}/>)
        } 
    }
}

export default withData(ItemList);