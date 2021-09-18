import React, {Component} from "react";
import ItemList from "../itemList"; 
import ErrorMesage from "../error";
import {withRouter} from "react-router-dom";


import GotService from "../../services/gotService";


class CharacterPage extends Component {

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

        return (
            <ItemList
            getData={this.gotService.getAllCharacters} 
            onItemSelected={
                (itemId) => {
                    this.props.history.push(`/characters/${itemId}`)
                }
            }
            renderItem={(item) => item.name} />
        )
    }
}

export default withRouter(CharacterPage);