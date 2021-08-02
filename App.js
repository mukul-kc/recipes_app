
import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { enableScreens } from 'react-native-screens';
// special package that enables native screens and improves performance
import { createStore, combineReducers } from 'redux';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';


enableScreens()
const rootReducer = combineReducers({ meals: mealsReducer });
const store = createStore(rootReducer);

const App = () => {

  return (
    <MealsNavigator />
  );
};

export default App;
