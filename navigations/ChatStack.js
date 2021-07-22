import React from 'react';

import { useTheme } from '../ThemeContext'
import Colors from '../constants/Colors';
import {
  HomeScreenHeaderRight,
  TabScreenHeaderLeft,
} from '../components/TabScreenHeader';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

export default function ChatStack({ navigation }) {
  const [theme] = useTheme()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Chats",
          headerStyle: {
            backgroundColor: Colors[theme].background,
            borderBottomColor: Colors[theme].background,
          },
          headerTitleStyle: {
            color: Colors[theme].text1,
            fontWeight: 'bold',
            fontSize: 22,
          },
          headerTitleAlign: 'left',
          headerLeft: TabScreenHeaderLeft,
          headerRight: HomeScreenHeaderRight,
        }}
      />
    </Stack.Navigator>
  );
}
