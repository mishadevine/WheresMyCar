'use strict';
import React, {
  AppRegistry,
  Component,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Button extends Component {

  render(){
    return (
      <View style={this.props.button_styles}>
        <TouchableHighlight underlayColor={"#E8E8E8"} onPress={this.props.onpress}>
          <View>
              <Text style={this.props.button_text_styles}>{this.props.text}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}


module.exports = Button;
