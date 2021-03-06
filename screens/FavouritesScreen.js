import React from 'react';

import { View, StyleSheet, Text } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavouritesScreen = props => {

    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return (
        <MealList displayedMeals={favMeals} navigation={props.navigation}/> 
    );
}

FavouritesScreen.navigationOptions = {
    headerTitle: 'Your Favourites',
};

export default FavouritesScreen;