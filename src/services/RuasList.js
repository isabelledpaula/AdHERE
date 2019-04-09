import React, {Component} from 'react';
import axios from 'axios';


export default class RuasList extends React.Component{
    state = {
        ruas: [],
        // ruasTrans: []
    }

    componentDidMount() {
        axios.get(`https://moobi-heremap.herokuapp.com/?key=PIMoobi2019`)
        .then(res => {
            // console.log(res);
            this.setState({ 
                ruas: Array.from(res.data.dados.ruas.cruzamentos),
                // ruasTrans: Array.from(ruas.meuDeusApareceAsRuasTransversais) 
            });
        })
    }

    render() {
        return(
            <ul>
                { this.state.ruas.map(rua => <li>{rua.nomeRuaPrincipal} <br/> {rua.id} <br/> </li>) }
                
            </ul>
        )
    }
}