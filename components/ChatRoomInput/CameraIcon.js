import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import Colors from "../../constants/Colors"

export default function CameraIcon() {
  return (
    <TouchableOpacity>
      <Ionicons name="camera" size={25} color={Colors.primaryDark} />
    </TouchableOpacity>
  );
}

