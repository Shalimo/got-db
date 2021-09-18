import React, {Component} from "react";
import GotService from "../../services/gotService";
import ItemDetails, {Field} from "../itemDetails";

export default class CharacterItem extends Component {

    
        state = {
            selectedChar: 3, // какой персонаж выбран в данный момент
        }
        gotService = new GotService();
    
    render() {
        return (
            <ItemDetails
                itemId={this.props.characterId} // {/* передаем id */}
                getData={this.gotService.getCharacter}
            > 
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )
    }
}