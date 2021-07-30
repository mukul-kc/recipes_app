import React from 'react';

import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
const CategoriesScreen = props => {
    
    const renderGridItem = (itemData) => {
        return (
           <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={() => {
               props.navigation.navigate({
               routeName: 'CategoryMeals',
               params: {
                   categoryId: itemData.item.id,
               }
           }) 
           }}/>  
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList keyExtractor={(item, index) => item.id} numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
        </View>
    );
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Categories',
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // alignItems: 'center'
        justifyContent: 'center'
    },
});

export default CategoriesScreen;