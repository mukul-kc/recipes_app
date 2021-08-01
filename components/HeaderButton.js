import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
    return <HeaderButton {...props} color={Platform.OS === 'android' ? 'white' : '#4a148c'}/>
}

export default CustomHeaderButton;