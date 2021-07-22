import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from "../../constants/Colors"

export default function GridIcon() {
  return (
    <TouchableOpacity>
      <Entypo name="grid" size={27} color={Colors.primaryDark} />
    </TouchableOpacity>
  );
}
