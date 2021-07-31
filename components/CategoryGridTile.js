import { isTSEnumDeclaration, PROPERTY_TYPES } from '@babel/types';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';
import { ScreenContainer } from 'react-native-screens';

const CategoryGridTile = props => {
    let TouchableComp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) 
        TouchableComp = TouchableNativeFeedback;

    return (
        <View style = {styles.gridItem} >
        <TouchableComp style={{flex: 1, }}onPress={props.onSelect}>
            <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                <Text style={styles.title} numberOfLines={2}> {props.title} </Text>
            </View>
        </TouchableComp>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        textAlign: 'right'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.46,
        shadowOffset: {width:0, height: 2},
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius:10,
        overflow: 'hidden',
        elevation: 5,
    }
})


export default CategoryGridTile;