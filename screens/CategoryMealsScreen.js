import React from 'react';

import { View, StyleSheet, Text, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
// NOTE: diff between push and navigate
// If you try to add the current screen to the stack, it will not work with navigate
// While you can do it with push

// Why push the same screen? Some apps like GDrive, you go from one folder to another, Screen is the SAME, just the content has changed.



const CategoriesMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    // Can now get all the meals with category id as catId 

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);


    return (
        <View style={styles.screen}>
            <Text> This is the categories meals screen </Text>
            <Button title="Go to meal detail" onPress={() => { props.navigation.navigate({ routeName: 'MealDetail' }) }} />
        </View>
    );
}

// navigationOptions can use static hardcoded values in object, but it can also be a function if you need a dynamic config
// React will pass the navigation data when calling this function
CategoriesMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    // Now this function should return an object which we were going to hardocde earlier
    return {
        headerTitle: selectedCategory.title,
    } 
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesMealsScreen;