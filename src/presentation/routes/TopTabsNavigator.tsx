import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { HamburguerMenu } from '../components/shared/HamburguerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
    return (
        <>
            <HamburguerMenu/>
            <Tab.Navigator
                // screenOptions={{
                //     tabBarStyle: {
                //         elevation: 0,
                //         shadowColor: 'transparent',
                //     },
            //     }
            // }
            >
                <Tab.Screen
                    name="Perfil"
                    options={{ title: 'Perfil' }}
                    component={ProfileScreen}
                />
                <Tab.Screen
                    name="About"
                    options={{ title: 'Acerca de' }}
                    component={AboutScreen}
                />
            </Tab.Navigator>
        </>
    );
};

export default TopTabsNavigator;
