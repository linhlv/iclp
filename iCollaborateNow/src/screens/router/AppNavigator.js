import React from 'react';

import { Platform } from 'react-native';
import { StackNavigator, SafeAreaView } from 'react-navigation';

import Drawer from './Drawer';

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none',
  },
);

export default () => (
  <SafeAreaView style={{flex: 1,
    backgroundColor: '#ddd'}}>
    <AppNavigator />
  </SafeAreaView>
)
        
