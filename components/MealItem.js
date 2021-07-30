import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, ImageBackground } from 'react-native';

const MealItem = props => {
    let Touchable = TouchableNativeFeedback;

    if (Platform.OS === 'ios') Touchable = TouchableOpacity;

    return (
        <View style={styles.mealItem}>
            <Touchable onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text numberofLines={1} style={styles.title}> {props.title} </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{props.duration}m </Text>
                        <Text> {props.complexity.toUpperCase()} </Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Touchable>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    mealHeader: {
        height: '85%',
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        margin: 5,
        borderRadius: 10,
        overflow:'hidden'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    }
});

export default MealItem;