import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export default function ChevronRight({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Entypo
        name="chevron-right"
        color={Colors.primaryDark}
        size={26}
        style={{
          paddingBottom: 4,
        }}
      />
    </TouchableOpacity>
  );
}
