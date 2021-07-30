import React from 'react';

import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {
    
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => { props.navigation.navigate({routeName: 'CategoryMeals', params: {
                categoryId: itemData.item.id,
            }}) }}>
                <View>
                    <Text> {itemData.item.title} </Text>
                </View>
            </TouchableOpacity>
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
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    }
});

export default CategoriesScreen;