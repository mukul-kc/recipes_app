import React from 'react';

import { View, StyleSheet, Text, Image } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const cur_meal = MEALS.find((item) => item.id == mealId);
    console.log(cur_meal);

    return (
        <View style={styles.screen}>
            {/* <Image source={{ uri: cur_meal.imageUrl }} /> */}
            <Text> {cur_meal.title} </Text>
        </View>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const meal = MEALS.find((item) => item.id == mealId);

    return {
        headerTitle: meal.title,
        // headerRight: (
        //     <HeaderButtons> <Item title="Favourites" onPress={() => {}}/></HeaderButtons>
        // ),
        // Doesn't work.
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;