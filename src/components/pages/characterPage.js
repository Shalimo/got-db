import React, {Component} from "react";
import ItemList from "../itemList"; 
import ItemDetails from "../itemDetails";
import ErrorMesage from "../error";
import RowBlock from "../rowBlock"
import { Field } from "../itemDetails";

import GotService from "../../services/gotService";

export default class CharacterPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedChar: null, // какой персонаж выбран в данный момент
            error: false
        }
        this.gotService = new GotService();
        this.onItemSelected = (id) => {
            this.setState({selectedChar: id}) // id подтягивается из i в itemList (номер в персонажа в массиве)
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
                getData={this.gotService.getAllCharacters} 
                onItemSelected={this.onItemSelected}
                renderItem={(item) => item.name} />
        )

        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedChar} // {/* передаем id */}
                getData={this.gotService.getCharacter}
            > 
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}