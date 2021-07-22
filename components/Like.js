import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function Like({ size }) {
  return (
    <AntDesign
      name="like1"
      size={size}
      color={Colors.primaryDark}
    />
  )
}

