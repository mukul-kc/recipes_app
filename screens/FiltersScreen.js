import React, { useState, useEffect, useCallback } from 'react';

import { View, StyleSheet, Text, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text> {props.label} </Text>
            <Switch
                value={props.value}
                onValueChange={(newVal) => props.onChange(newVal)}
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={Platform.OS === 'android' ? Colors.accentColor : ''}
            />
        </View>
    );
}

const FilterScreen = props => {

    const { navigation } = props;

    const [isGlutenFree, setGlutenFree] = useState(false);
    const [isVegetarian, setVegetarian] = useState(false);
    const [isVegan, setVegan] = useState(false);   
    const [isLactoseFree, setLactoseFree] = useState(false);   

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            vegetarian: isVegetarian,
            vegan: isVegan,
            lactoseFree: isLactoseFree
        }
        console.log(appliedFilters)
    }, [isGlutenFree, isVegetarian, isVegan, isLactoseFree])

    useEffect(() => {
        props.navigation.setParams({save: saveFilters});   
    },[saveFilters])
    
    return (
        <View style={styles.screen}>
            <Text style={styles.title}> Available Filters </Text>
            <FilterSwitch
                label={'Gluten Free'}
                value={isGlutenFree}
                onChange={setGlutenFree}
            />
            <FilterSwitch
                label={'Vegan'}
                value={isVegan}
                onChange={setVegan}
            />
            <FilterSwitch
                label={'Vegetarian'}
                value={isVegetarian}
                onChange={setVegetarian}
            />
            <FilterSwitch
                label={'Lactose Free'}
                value={isLactoseFree}
                onChange={setLactoseFree} 
            />
        </View>
    );
}

FilterScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Filters',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title='M' onPress={() => {
            navigationData.navigation.toggleDrawer();
        }} /></HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title='Save' onPress={() => {
            navigationData.navigation.getParam('save')();
         }} /></HeaderButtons>,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        margin: 20,
        textAlign: 'center',
    },
    filterContainer: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    }
});

export default FilterScreen;