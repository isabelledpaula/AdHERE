import React, { Component } from 'react';
import { HereMap, Marker, Polygon, Polyline, Circle, Rectangle, PathFinder } from 'rc-here-maps';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: -1.4578913,
      lng: -48.4734453,
      center: {
        lat: -1.4578913,
        lng: -48.4734453,
      },
      showPopover: false,
      polylineDataPoints: [10, 3, 100, 25, 13, 100, 10, 30, 100, 25, 25, 100],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const coords = {
        lat: -1.4578913,
        lng: -48.4734453,
      };
      this.setState({
        lat: coords.lat,
        lng: coords.lng,
        center: coords,
        polylineDataPoints: [10, 3, 100, 25, 13, 100, 10, 30, 100, 25, 25, 100]
      });
    }, 1000);
  }

  onTogglePopover = showPopover => {
    this.setState({
      showPopover,
    });
  };

  onClick = () => {
    console.log('I am clicked');
  };

  render() {
    return (
      <div className="App">
        <HereMap
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
        </HereMap>
      </div >
    );
  }
}

export default App;
