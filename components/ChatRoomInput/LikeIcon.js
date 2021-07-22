import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Like from '../Like';

export default function ({ onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress('like')}>
      <Like size={26} />
    </TouchableOpacity>
  );
}
