import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTheme } from '../ThemeContext';
import Colors from '../constants/Colors';

export default function ({ children, size = 36, color, onPress }) {
  const [theme] = useTheme();

  const bubbleStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: color || Colors[theme].secondary,
  };

  return onPress ? (
    <TouchableOpacity style={bubbleStyle} onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={bubbleStyle}>{children}</View>
  );
}
