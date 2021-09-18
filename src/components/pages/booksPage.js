import React, {Component} from "react";
import ItemList from "../itemList"; 
import ItemDetails from "../itemDetails";
import ErrorMesage from "../error";
import RowBlock from "../rowBlock"
import { Field } from "../itemDetails";

import GotService from "../../services/gotService";

export default class BooksPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedBook: null, // какой персонаж выбран в данный момент
            error: false
        }
        this.gotService = new GotService();
        this.onItemSelected = (id) => {
            this.setState({selectedBook: id}) // id подтягивается из i в itemList (номер в персонажа в массиве)
        }
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    render() {

        const {error} = this.state;

        if (error) {
            return <ErrorMesage/>
        }

        const itemList = (
            <ItemList
                getData={this.gotService.getAllBooks} 
                onItemSelected={this.onItemSelected}
                renderItem={(item) => item.name} />
        )

        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedBook} // {/* передаем id */}
                getData={this.gotService.getBook}
            > 
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}