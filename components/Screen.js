import React from 'react';
import { View, StatusBar } from 'react-native';

import { useTheme } from '../ThemeContext';
import Colors from '../constants/Colors';

export default function ({ children, style }) {
  const [theme] = useTheme();

  const barStyle = theme === 'dark' ? 'light-content' : 'dark-content';
  const screenStyle = {
    backgroundColor: Colors[theme].background,
    flex: 1,
    ...style
  };

  return (
    <View style={screenStyle}>
      <StatusBar barStyle={barStyle} />
      {children}
    </View>
  );
}
