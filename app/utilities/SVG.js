'use strict';
import React, {
  AppRegistry,
  Component,
  Text,
  View,
  Navigator,
  AsyncStorage,
  StyleSheet,
} from 'react-native';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Path,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

class SVG extends Component {
    render() {
        return (
            <Svg pointerEvents={'none'}
            style={styles.svg}
                height="200"
                width="200"
            >
              <G>
                <Path fill="#FFFFFF" d="M100,200h100V100C200,155.229,155.229,200,100,200z"/>
                <Path fill="#FFFFFF" d="M100,0c55.229,0,100,44.771,100,100V0H100z"/>
                <Path fill="#FFFFFF" d="M0,100v100h100C44.771,200,0,155.229,0,100z"/>
                <Path fill="#FFFFFF" d="M100,0H0v100C0,44.771,44.771,0,100,0z"/>
              </G>
            </Svg>
        );
    }
}

var styles = StyleSheet.create({
  svg: {
    paddingLeft: 20,
    backgroundColor: 'transparent'
  },
});

module.exports = SVG;
