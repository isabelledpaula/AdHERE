import React, { Component } from 'react';
// import HEREMap, { Marker, RouteLine } from 'here-maps-react'
import { HereMap, Marker, PathFinder } from 'rc-here-maps';
import './style.css'
import axios from 'axios'
import logoImage from '../../assets/images/adhere_logo.svg'

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            center: {
                lat: -1.4578913,
                lng: -48.4734453,
            },

            requestHERE: null,

            streetBlocks: null,
        }
    }

    componentDidMount() {
        axios.get("http://moobi-heremap.herokuapp.com/?key=PIMoobi2019", {
            headers: { "Content-Type": "application/json" }
        })
            .then(res => {
                const requestHERE = res.data;
                this.setState({ requestHERE });
            })
    }

    handleCoordinates = (coordinates) => {
        var finalCoordinates = [];

        coordinates.map(coordinate => {
            var subCoordinates = coordinate.split(" ");

            subCoordinates.map(subCoordinate => {
                if (subCoordinate !== "") {
                    finalCoordinates.push(subCoordinate);
                }
            });
        })

        return finalCoordinates;
    }

    render() {
        return (
            <body className="body">
                {/* Div da NavBar */}
                <div className="container1">
                    <div className="divNav">
                        <nav className="navbar">
                            <img src={logoImage} height="30" />
                            <a id="a2" href="#">Belém</a>
                        </nav>
                    </div>

                    {/* Menu column 1 */}

                    <section id="column1">
                        <div className="card">
                            <p>Melhores pontos para anunciar nas <b>sextas</b>, às <b>08h:</b></p>
                            <ul id="lista">
                                <li>
                                    <div class="linha-vertical">
                                        <p> <b>Av. José Malcher</b> com <br /><b>Av. Alcindo Cacela</b> </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="linha-vertical">
                                        <p> <b>Av. José Malcher</b> com <br /><b>Av. Alcindo Cacela</b> </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="linha-vertical">
                                        <p> <b>Av. José Malcher</b> com <br /><b>Av. Alcindo Cacela</b> </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="cardMap" style={{ padding: 4 }}>
                            <div className="App">
                                {/* <HEREMap
                                    appId="my2dhMRU9k56Wv8QdloT"
                                    appCode="dGOv83JgdKNfBmMakPG5RA"
                                    center={this.state.center}
                                    zoom={13}
                                    hidpi
                                    interactive
                                    // setLayer={{ layer: 'traffic', mapType: 'terrain' }}>
                                    setLayer={{ layer: 'map', mapType: 'terrain' }}>

                                    {this.state.requestHERE != null ?
                                        this.state.requestHERE.dados.ruas.cruzamentos.map(cruzamento => {

                                            return cruzamento.ruasTransversais.map(rua => {
                                                // { console.log(rua.nomeRuaTransversal) }
                                                // { console.log("---") }
                                                // { console.log(this.handleCoordinates(rua.pontosDeEncontro)) }

                                                var trafficFlow = rua.fluxoAtual[0].nivelDeTrafego;
                                                var color = "";

                                                if (trafficFlow >= 0 && trafficFlow < 4) {
                                                    color = "#00c853";
                                                } else if (trafficFlow >= 4 && trafficFlow < 8) {
                                                    color = "#ff6f00"
                                                } else if (trafficFlow >= 8 && trafficFlow < 10) {
                                                    color = "#b71c1c"
                                                } else if (trafficFlow === 10) {
                                                    color = "#000000"
                                                }

                                                return (
                                                    <RouteLine
                                                        shape={this.handleCoordinates(rua.pontosDeEncontro)}
                                                        strokeColor={color}
                                                        lineWidth={4}
                                                    />)
                                            })
                                        })
                                        : null}

                                </HEREMap> */}

                                <HereMap
                                    appId="my2dhMRU9k56Wv8QdloT"
                                    appCode="dGOv83JgdKNfBmMakPG5RA"
                                    useHTTPS={false}
                                    center={this.state.center}
                                    zoom={13.5}>

                                    <Marker lat={-1.470165} lng={-48.468739}>
                                        <i class="material-icons">
                                            dock
                                        </i>
                                    </Marker>

                                    <PathFinder
                                        waypoints={[{ lat: -1.454180, lng: -48.496663 }, { lat: -1.470165, lng: -48.468739 }]}
                                        style={{
                                            lineWidth: 5,
                                            strokeColor: 'rgba(256, 0, 0, 0.9)',
                                        }}
                                    />
                                </HereMap>
                            </div>
                        </div>
                    </section>

                    <section id="column2">
                        <div className="card">
                            <h4>Melhor lugar pra por o bagulho</h4>
                        </div>
                    </section>

                    {/* <div class="column2">

                    </div> */}
                </div>

            </body >

        );
    }
}

export default Home;