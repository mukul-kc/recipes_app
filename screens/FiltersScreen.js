import React from 'react';

import { View, StyleSheet, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';


const FilterScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> This is the filters screen </Text>
        </View>
    );
}

FilterScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Filters',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title='M' onPress={() => {
            navigationData.navigation.toggleDrawer();
        }} /></HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FilterScreen;