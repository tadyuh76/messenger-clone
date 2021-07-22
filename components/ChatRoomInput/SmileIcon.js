import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export default function () {
  return (
    <TouchableOpacity>
      <AntDesign name="smile-circle" size={20} color={Colors.primaryDark} />
    </TouchableOpacity>
  );
}
