import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import { useNavigation } from '@react-navigation/native';

export default function BackButton({ color = Colors.primaryDark }) {
  const navigation = useNavigation();

  return (
    <TouchableHighlight>
      <Ionicons
        name="arrow-back"
        size={28}
        color={color}
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 16 }}
      />
    </TouchableHighlight>
  );
}
