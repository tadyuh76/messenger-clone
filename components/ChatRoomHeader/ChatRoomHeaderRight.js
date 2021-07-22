import React from "react"
import {View} from "react-native"

import Colors from '../../constants/Colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import ProfileImage from '../ProfileImage';

export default function ChatRoomHeaderRight() {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginRight: 16,
        width: 120,
        justifyContent: 'space-between',
      }}>
      <Ionicons name="call" size={24} color={Colors.primaryDark} />
      <Ionicons name="videocam" size={24} color={Colors.primaryDark} />
      <MaterialIcons name="info" size={24} color={Colors.primaryDark} />
    </View>
  );
}
