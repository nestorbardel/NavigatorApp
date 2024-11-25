import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {HamburguerMenu} from '../../components/shared/HamburguerMenu';

export const Tab2Screen = () => {
    return (
        <View style={globalStyles.container}>
            <HamburguerMenu />
            <Text>Tab2Screen</Text>
        </View>
    );
};
