import React from 'react';
import 'react-native-gesture-handler';

// Colors
import { useTheme } from '../ThemeContext';
import Colors from '../constants/Colors';

// Components
import {
  ChatRoomHeaderLeft,
  ChatRoomHeaderRight,
} from '../components/ChatRoomHeader';
import BackButton from '../components/BackButton';

// Screens
import RootBottomTab from './RootBottomTab';
import ChatRoomScreen from '../screens/ChatRoom';
import SettingScreen from '../screens/Settings';
import AddChatScreen from '../screens/AddChat';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';
import LoadingScreen from '../screens/Loading';

// Navigations
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function RootNavigator() {
  const [theme] = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors[theme].background,
            borderBottomColor: Colors[theme].background
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors[theme].text1,
          },
          headerTintColor: Colors[theme].text1,
          headerTitleAlign: 'left',
        }}
        initialRouteName="Loading">
        <Stack.Screen
          name="RootBottomTab"
          component={RootBottomTab}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ChatRoom"
          component={ChatRoomScreen}
          options={({ route }) => ({
            title:
              route.params.groupName.length > 8
                ? route.params.groupName.substring(0, 8) + '...'
                : route.params.groupName,
            headerTitleStyle: {
              color: Colors[theme].text1,
              fontSize: 16,
              marginLeft: 32,
            },
            headerLeft: () => ChatRoomHeaderLeft(route),
            headerRight: ChatRoomHeaderRight,
          })}
        />
        <Stack.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            title: 'Me',
            headerTitleStyle: {
              fontWeight: '500',
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddChat"
          component={AddChatScreen}
          options={{
            title: 'New group chat',
          }}
        />
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
