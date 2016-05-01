import React, {
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
import Firebase from 'firebase';

let app = new Firebase("https://dudewheresmycar.firebaseio.com/");


class Account extends Component {

  constructor(props){
    super(props);
    this.state = {
      pinStatus: false
    }
  }

  onButtonPress() {
    this.props.navigator.push({
      component: Home
    })
  }

  logout(){

    AsyncStorage.removeItem('user_data').then(() => {
      app.unauth();
      this.props.navigator.push({
        component: Home
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
                Your Account
              </Text>
              <TouchableHighlight
                style={styles.logoutButton}
                onPress={this.logout.bind(this)}
                >
                <View style={styles.logoutContainer}>
                <Text style={styles.logoutText}>
                  Logout
                </Text>
                </View>
              </TouchableHighlight>
            </View>


              <TouchableHighlight
              style={styles.primary_button}
                onpress={this.onButtonPress.bind(this)}
                 underlayColor={"#E8E8E8"} onPress={this.props.onpress}>
                <View>
                    <Text>Your Recent Pins</Text>
                </View>
              </TouchableHighlight>
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
  logoutText: {
    width: 90,
    marginTop: -140,
    marginLeft: 280,
    textAlign: 'center',
  },
  primary_button: {
    backgroundColor: '#52c14f',
    padding: 20,
    paddingLeft: 70,
    paddingRight: 70,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 200,
  },
  primary_button_text: {
    color: 'black',
    fontSize: 18,
  },
  footer: {
    backgroundColor: '#6fc5ee',
    height: 50,
    paddingLeft: 200,
    paddingRight: 200,
  },
});


module.exports = Account;
