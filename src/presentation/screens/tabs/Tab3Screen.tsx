import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';

export const Tab3Screen = () => {
    return (
        <View style={globalStyles.container}>
            <HamburguerMenu />
            <Text>Tab3Screen</Text>
        </View>
    );
};
