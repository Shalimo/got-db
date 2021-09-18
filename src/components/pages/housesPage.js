import React, {Component} from "react";
import ItemList from "../itemList"; 
import ItemDetails from "../itemDetails";
import ErrorMesage from "../error";
import RowBlock from "../rowBlock"
import { Field } from "../itemDetails";

import GotService from "../../services/gotService";

export default class HousesPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedHouse: null, // какой персонаж выбран в данный момент
            error: false
        }
        this.gotService = new GotService();
        this.onItemSelected = (id) => {
            this.setState({selectedHouse: id}) // id подтягивается из i в itemList (номер в персонажа в массиве)
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
                getData={this.gotService.getAllHouses} 
                onItemSelected={this.onItemSelected}
                renderItem={(item) => item.name} />
        )

        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedHouse} // {/* передаем id */}
                getData={this.gotService.getHouse}
            > 
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='ancestralWeapons' label='Ancestral Weapons'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}