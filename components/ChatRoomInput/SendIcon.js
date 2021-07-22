import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import Colors from "../../constants/Colors"

export default function SendIcon({sendMessage}) {
  return (
    <TouchableOpacity onPress={()=>sendMessage("message")}>
      <Ionicons name="paper-plane" size={24} color={Colors.primaryDark} />
    </TouchableOpacity>
  );
}

