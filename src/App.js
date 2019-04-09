import React, { Component, Info } from 'react';
// import { HereMap, Marker, Polygon, Polyline, Circle, Rectangle, PathFinder } from 'rc-here-maps';
import { HEREMap, RouteLine } from 'here-maps-react'
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // lat: -1.4578913,
      // lng: -48.4734453,

      center: {
        lat: -1.4578913,
        lng: -48.4734453,
      },

      requestHERE: null,

      streetBlocks: null,

      // showPopover: false,
      // polylineDataPoints: [10, 3, 100, 25, 13, 100, 10, 30, 100, 25, 25, 100],
    };
  }

  componentDidMount() {

    axios.get("http://moobi-heremap.herokuapp.com/?key=PIMoobi2019", {
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        const requestHERE = res.data;
        this.setState({ requestHERE });
      })

    //   setTimeout(() => {
    //     const coords = {
    //       lat: -1.4578913,
    //       lng: -48.4734453,
    //     };
    //     this.setState({
    //       lat: coords.lat,
    //       lng: coords.lng,
    //       center: coords,
    //       polylineDataPoints: [10, 3, 100, 25, 13, 100, 10, 30, 100, 25, 25, 100]
    //     });
    //   }, 1000);
  }

  handleCoordinates = (coordinates) => {
    var finalCoordinates = [];

    coordinates.map(coordinate => {
      var subCoordinates = coordinate.split(" ");

      subCoordinates.map(subCoordinate => {
        if (subCoordinate != "") {
          finalCoordinates.push(subCoordinate);
        }
      });
    })

    // var realFinalCoordinates = [
    //   finalCoordinates[0],
    //   finalCoordinates[finalCoordinates.length - 1]
    // ]

    return finalCoordinates;
  }

  // onTogglePopover = showPopover => {
  //   this.setState({
  //     showPopover,
  //   });
  // };

  // onClick = () => {
  //   console.log('I am clicked');
  // };

  render() {
    return (
      <div className="App">

        <HEREMap
          appId="my2dhMRU9k56Wv8QdloT"
          appCode="dGOv83JgdKNfBmMakPG5RA"
          center={this.state.center}
          zoom={14}
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
                } else if (trafficFlow == 10) {
                  color = "#000000"
                }

                return (
                  <RouteLine
                    shape={this.handleCoordinates(rua.pontosDeEncontro)}
                    strokeColor={color}
                    lineWidth={6}
                  />)
              })

            })
            : null}

        </HEREMap>

        {/* <HereMap
          appId="my2dhMRU9k56Wv8QdloT"
          appCode="dGOv83JgdKNfBmMakPG5RA"
          useHTTPS={false}
          center={this.state.center}
          zoom={14}>

          <Circle
            center={this.state.center}
            radius={100}
            fillColor="rgba(256, 0, 0, 0.9)"
            strokeColor="rgba(100, 0, 256, 0.9)"
            onCircleDrawn={this.onCircleDrawn}
          />

          <Polyline dataPoints={this.state.polylineDataPoints} />

          <PathFinder
            waypoints={[{ lat: -1.454180, lng: -48.496663 }, { lat: -1.470165, lng: -48.468739 }]}
            style={{
              lineWidth: 5,
              strokeColor: 'rgba(256, 0, 0, 0.9)',
            }}
          />
        </HereMap> */}
      </div >
    );
  }
}

export default App;