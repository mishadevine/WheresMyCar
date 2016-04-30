import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  StatusBar,
  AsyncStorage
} from 'react-native';

import Button from './components/Button';
import Map from './Map';
import Login from './Login';
import Firebase from 'firebase';

let app = new Firebase("https://dudewheresmycar.firebaseio.com/");


class Account extends Component {

  constructor(props){
    super(props);
    this.state = {
      // pinStatus: false
      loaded: false,
    }
  }

  onButtonPress() {
    this.props.navigator.push({
      component: Second,
      passProps: this.state.pinStatus
    })
  }

  componentWillMount(){

    AsyncStorage.getItem('user_data').then((user_data_json) => {
      let user_data = JSON.parse(user_data_json);
      this.setState({
        user: user_data,
        loaded: true
      });
    });

  }

  render() {
      StatusBar.setHidden(true);
    return (
      <View style={styles.container}>

        <Map style={styles.float} />
        <View
        style={styles.float}
        pointerEvents={'box-none'}>
          <View
          style={styles.container}
          pointerEvents={'box-none'}>
            <View style={styles.wrapper}
            pointerEvents={'box-none'}>
              <Text style={styles.pinCar}>
                Welcome To Your Account
              </Text>
            </View>
          </View>
          <View style={styles.recentPins}>
            <Text> Your Recent Pins </Text>
          </View>
        </View>
        <View style={styles.footer}>
        <Text>

        </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  float: {
    flex:1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    marginLeft: 0,
    backgroundColor: 'transparent'
  },
  pinCar: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#6fc5ee',
    paddingLeft: 200,
    paddingRight: 200,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 100,
    fontFamily: "Krungthep",
  },
  recentPins: {
    // marginTop: -300,
  },
  footer: {
    backgroundColor: '#6fc5ee',
    height: 50,
    paddingLeft: 200,
    paddingRight: 200,
  },
});


module.exports = Account;
