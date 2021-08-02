import React from 'react';

import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const cur_meal = MEALS.find((item) => item.id == mealId);

    return (
        <ScrollView>
            <Image source={{uri:cur_meal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <Text>{cur_meal.duration}m </Text>
                <Text> {cur_meal.complexity.toUpperCase()} </Text>
                <Text>{cur_meal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}> Ingredients </Text>
            <Text> List of ingredients .. </Text>  
            <Text style={styles.title}> Steps: </Text>
        </ScrollView>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const meal = MEALS.find((item) => item.id == mealId);

    return {
        headerTitle: meal.title,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}> <Item title="Favourites" onPress={() => { }} /></HeaderButtons>
        ),
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
    }
});

export default MealDetailScreen;