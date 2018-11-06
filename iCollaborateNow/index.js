/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import AppNavigator from './src/screens/router/AppNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
