import React from 'react';

import { useTheme } from '../ThemeContext';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

import ChatStack from './ChatStack';
import PeopleStack from './PeopleStack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function RootBottomTab() {
  const [theme] = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Chats"
      tabBarPosition="bottom"
      tabBarOptions={{
        style: {
          backgroundColor: Colors[theme].background,
          height: 56,
        },
        activeTintColor: Colors.blue,
        inactiveTintColor: Colors[theme].text2,
        labelStyle: {
          fontSize: 14,
          bottom: 8,
          textTransform: 'none',
        },
        indicatorStyle: {
          height: 0,
        },
        showIcon: true,
      }}
      swipeEnabled={false}>
      <Tab.Screen
        name="Chats"
        component={ChatStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="chatbubble"
              size={22}
              color={color}
              style={{ marginBottom: 16 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="People"
        component={PeopleStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="people"
              size={24}
              color={color}
              style={{ marginBottom: 16 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
