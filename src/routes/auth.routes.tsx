import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { AppointmentsDetails } from '../screens/AppointmentDetails';
import { AppointmentsCreate } from '../screens/AppointmentCreate';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {

    return (
        <Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary100,
                },
                headerShown: false,
            }}
        >
            <Screen name="SignIn" component={SignIn} />
            <Screen name="Home" component={Home} />
            <Screen name="AppointmentsDetails" component={AppointmentsDetails} />
            <Screen name="AppointmentsCreate" component={AppointmentsCreate} />
        </Navigator>
    );
}