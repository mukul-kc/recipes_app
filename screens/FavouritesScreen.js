import React from 'react';

import { View, StyleSheet, Text } from 'react-native';


const FavouritesScreen = () => {
    return (
        <View style={styles.screen}>
            <Text> This is the favourties screen </Text>
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

export default FavouritesScreen;