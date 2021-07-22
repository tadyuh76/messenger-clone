import React from 'react';
import { TabScreenHeaderLeft } from '../components/TabScreenHeader';

// Colors
import { useTheme } from '../ThemeContext';
import Colors from '../constants/Colors';

// Navigations
import PeopleScreen from '../screens/People';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function PeopleStack() {
  const [theme] = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="People"
        component={PeopleScreen}
        options={{
          headerStyle: { backgroundColor: Colors[theme].background },
          headerTitleStyle: {
            color: Colors[theme].text1,
            fontWeight: 'bold',
            fontSize: 22,
          },
          headerTitleAlign: 'left',
          headerLeft: TabScreenHeaderLeft,
        }}
      />
    </Stack.Navigator>
  );
}
