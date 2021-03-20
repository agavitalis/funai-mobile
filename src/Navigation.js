import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LandingScreen from './screens/landing/Landing';
import WebsiteScreen from './screens/website/Website';
import PortalScreen from './screens/portal/Portal';

const Stack = createStackNavigator();



export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingScreen" headerMode='none' >
        <Stack.Screen name="LandingScreen" component={LandingScreen} options={{}} />
        <Stack.Screen name="WebsiteScreen" component={WebsiteScreen} />
        <Stack.Screen name="PortalScreen" component={PortalScreen} />

      </Stack.Navigator>

    </NavigationContainer>


  );
}
