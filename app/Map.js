'use strict';

var React = require('react-native');
var Mapbox = require('react-native-mapbox-gl');
var mapRef = 'mapRef';
var {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Component
} = React;

var SVG = require('./utilities/SVG');

var Map = React.createClass({
  mixins: [Mapbox.Mixin],
  getInitialState() {
    return {
      center: {
        latitude: 28.5785560,
        longitude: -81.2100910
      },
      zoom: 14,
      annotations: [{
        coordinates: [40.72052634, -73.97686958312988],
        'type': 'point',
        title: 'This is marker 1',
        subtitle: 'It has a rightCalloutAccessory too',
        rightCalloutAccessory: {
          url: 'https://cldup.com/9Lp0EaBw5s.png',
          height: 25,
          width: 25
        },
        annotationImage: {
          url: 'https://cldup.com/CnRLZem9k9.png',
          height: 25,
          width: 25
        },
        id: 'marker1'
      }, {
        coordinates: [40.714541341726175,-74.00579452514648],
        'type': 'point',
        title: 'Important!',
        subtitle: 'Neat, this is a custom annotation image',
        annotationImage: {
          url: 'https://cldup.com/7NLZklp8zS.png',
          height: 25,
          width: 25
        },
        id: 'marker2'
      }, {
        'coordinates': [[40.76572150042782,-73.99429321289062],[40.743485405490695, -74.00218963623047],[40.728266950429735,-74.00218963623047],[40.728266950429735,-73.99154663085938],[40.73633186448861,-73.98983001708984],[40.74465591168391,-73.98914337158203],[40.749337730454826,-73.9870834350586]],
        'type': 'polyline',
        'strokeColor': '#00FB00',
        'strokeWidth': 4,
        'strokeAlpha': .5,
        'id': 'foobar'
      }, {
        'coordinates': [[40.749857912194386, -73.96820068359375], [40.741924698522055,-73.9735221862793], [40.735681504432264,-73.97523880004883], [40.7315190495212,-73.97438049316406], [40.729177554196376,-73.97180557250975], [40.72345355209305,-73.97438049316406], [40.719290332250544,-73.97455215454102], [40.71369559554873,-73.97729873657227], [40.71200407096382,-73.97850036621094], [40.71031250340588,-73.98691177368163], [40.71031250340588,-73.99154663085938]],
        'type': 'polygon',
        'fillAlpha':1,
        'strokeColor': '#fffff',
        'fillColor': 'blue',
        'id': 'zap'
      }]
     };
  },
  onRegionChange(location) {
    this.setState({ currentZoom: location.zoom });
  },
  onRegionWillChange(location) {
    console.log(location);
  },
  onUpdateUserLocation(location) {
    console.log(location);
  },
  onOpenAnnotation(annotation) {
    console.log(annotation);
  },
  onRightAnnotationTapped(e) {
    console.log(e);
  },
  onLongPress(location) {
    console.log('long pressed', location);
  },
  onTap(location) {
    console.log('tapped', location);
  },
  onOfflineProgressDidChange(progress) {
    console.log(progress);
  },
  render() {
    StatusBar.setHidden(true);
    return (
      <View style={styles.container}>
        <Mapbox
          style={styles.map}
          direction={0}
          rotateEnabled={true}
          scrollEnabled={true}
          zoomEnabled={true}
          showsUserLocation={true}
          ref={mapRef}
          accessToken={'pk.eyJ1Ijoia3VpcGVyIiwiYSI6ImNpbTNvajJoMTAwOW9pb2tzNmZic25uZGEifQ.q32YcfDQ6sjyKXKehst3gw'}
          styleURL={this.mapStyles.emerald}
          userTrackingMode={this.userTrackingMode.none}
          centerCoordinate={this.state.center}
          zoomLevel={this.state.zoom}
          onRegionChange={this.onRegionChange}
          onRegionWillChange={this.onRegionWillChange}
          annotations={this.state.annotations}
          onOpenAnnotation={this.onOpenAnnotation}
          onRightAnnotationTapped={this.onRightAnnotationTapped}
          onUpdateUserLocation={this.onUpdateUserLocation}
          onLongPress={this.onLongPress}
          onTap={this.onTap} />
          <View
            style={styles.svgContainer}
            pointerEvents={'none'}>
            <View style={styles.svgSpacer} />
              <View style={styles.svgContainerColumn} >
                <View style={styles.svgSpacer} />
                  <SVG
                    style={styles.svg}
                  />
                <View style={styles.svgSpacer} />
              </View>
            <View style={styles.svgSpacer} />
          </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
  },
  map: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  svg: {
    flex:1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    marginLeft: 0,
    backgroundColor: 'transparent'
  },
  svgContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
  },svgContainerColumn: {
    flex: 3,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'column',
  },svgSpacer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});

module.exports = Map;
