import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  AsyncStorage,
  View
} from 'react-native';
import Signup from './app/Signup';
import Account from './app/Account';
import Login from './app/Login';
import Home from './app/Home';
import Second from './app/Second';
import Firebase from 'firebase';

let app = new Firebase("https://dudewheresmycar.firebaseio.com/");

var Third = require('./app/components/Third');
var Fourth = require('./app/Fourth');
var Error = require('./app/Error');
var Repin = require('./app/Repin');
var SaveYourPin = require('./app/SaveYourPin');

class WheresMyCar extends Component {

  constructor(props){
    super(props);
    this.state = {
      component: null,
      loaded: false
    };
  }

  componentWillMount(){


    AsyncStorage.getItem('user_data').then((user_data_json) => {
      let user_data = JSON.parse(user_data_json);
      let component = {component: Home};
      if(user_data != null){
        app.authWithCustomToken(user_data.token, (error, authData) => {
          if(error){
            this.setState(component);
          }else{
            this.setState({component: Second});
          }
        });
      }else{
        this.setState(component);
      }
    });

  }

  render() {

      if(this.state.component){
      return (
        <Navigator
          initialRoute={{component: this.state.component}}
          configureScene={() => {
            return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
            if(route.component){
              return React.createElement(route.component, { navigator });
            }
          }}
        />
      );
    }else{
      return (
        <View style={styles.container}>

          <View style={styles.body}></View>
        </View>
      );
    }

  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('WheresMyCar', () => WheresMyCar);
