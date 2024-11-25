import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {

    // const myIcon = ;

    return (
        <View style={globalStyles.container}>
            <HamburguerMenu/>
            <Text>Tab1Screen</Text>
            <Icon name="rocket-outline" size={30} color="#900" />
        </View>
    );
};
