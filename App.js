
import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { enableScreens } from 'react-native-screens';
// special package that enables native screens and improves performance

import MealsNavigator from './navigation/MealsNavigator';

enableScreens()

const App = () => {

  return (
    <MealsNavigator/>
  );
};

export default App;
