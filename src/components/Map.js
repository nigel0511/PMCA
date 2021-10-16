import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 1.333789826366528,
      lng: 103.74117538897546,
    },
    zoom: 16.8,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="container">
        <div style={{ height: "50vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCgdjb4qX29r28lAungoPsdfbI97Ouwcwg",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={1.3339217044573939}
              lng={103.7387793162402}
              text={
                <div>
                  <i
                    class="fas fa-map-marker-alt fa-2x"
                    style={{ color: "red" }}
                  ></i>
                  Philharmonic Musicademy
                </div>
              }
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default SimpleMap;
