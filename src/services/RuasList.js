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
             console.log(res.data.dados.ruas.cruzamentos);
            this.setState({
                ruas: Array.from(res.data.dados.ruas.cruzamentos),
                // ruasTrans: Array.from(ruas.meuDeusApareceAsRuasTransversais) 
            });
        })
    }

    render() {
        return(
            <ul>
                {
                    this.state.ruas.map(rua => {
                        return rua.ruasTransversais.map(ruaTransversal => {
                            return (
                                <li>{rua.nomeRuaPrincipal} com {ruaTransversal.nomeRuaTransversal} -- {ruaTransversal.fluxoAtual[0].nivelDeTrafego}
                                    <br/> {rua.id} <br/>
                                </li>
                            )
                        })
                    })
                }
                
            </ul>
        )
    }
}