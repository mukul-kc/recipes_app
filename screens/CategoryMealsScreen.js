import React from 'react';

import { View, StyleSheet, Text, Button } from 'react-native';


// NOTE: diff between push and navigate
// If you try to add the current screen to the stack, it will not work with navigate
// While you can do it with push

// Why push the same screen? Some apps like GDrive, you go from one folder to another, Screen is the SAME, just the content has changed.



const CategoriesMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> This is the categories meals screen </Text>
            <Button title="Go to meal detail" onPress={() => { props.navigation.navigate({routeName: 'MealDetail'})}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesMealsScreen;