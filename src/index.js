import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import AddCity from './addCity/AddCity';
import City from './cities/City';
import Cities from './cities/Cities';
import { colors } from './theme';

const CitiesNav = createStackNavigator({
    Cities: { screen: Cities },
    City: { screen: City }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary
        },
        headerTintColor: '#fff'
    }
});

const Tabs = createBottomTabNavigator({
    Cities: { screen: CitiesNav },
    AddCity: { screen: AddCity }
});

export default Tabs;