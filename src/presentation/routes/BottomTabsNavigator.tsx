import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import { Text} from 'react-native';
import TopTabsNavigator from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';


const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {


    return (
        <Tab.Navigator
            screenOptions={{
                sceneStyle: {backgroundColor: 'blue'},
                tabBarLabelStyle: {
                    marginBottom: 5,
                },
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0,
                },
            }}>
            <Tab.Screen
                name="Tab1"
                options={{
                    title: 'Tab1',
                    tabBarIcon: ({color}) => <IonIcon name="return-up-back-outline" size={20} />
                    ,
                }}
                component={Tab1Screen}
            />
            <Tab.Screen
                name="Tab2"
                options={{
                    title: 'Tab2',
                    tabBarIcon: ({color}) => <IonIcon name="repeat-outline" size={20} />,
                }}
                component={TopTabsNavigator}
            />
            <Tab.Screen
                name="Tab3"
                options={{
                    title: 'Tab3',
                    tabBarIcon: ({color}) => <IonIcon name="return-up-forward-outline" size={20} />,
                }}
                component={StackNavigator}
                // component={Tab3Screen}

            />
        </Tab.Navigator>
    );
};

export default BottomTabsNavigator;
