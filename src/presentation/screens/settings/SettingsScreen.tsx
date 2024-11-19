import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../routes/StackNavigator';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export const SettingsScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <View style={globalStyles.container}>
            <Text style={{marginBottom: 10}}>Settings Screen</Text>

            <PrimaryButton
                label="Regresar"
                onPress={() => navigation.goBack()}
            />

            <PrimaryButton
                label="Regresar a Home"
                onPress={()=> navigation.dispatch(StackActions.popToTop())}
            />
        </View>
    );
};
