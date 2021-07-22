import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {FontAwesome} from "@expo/vector-icons"
import Colors from "../../constants/Colors"

export default function MicrophoneIcon() {
  return (
    <TouchableOpacity>
      <FontAwesome name="microphone" size={23} color={Colors.primaryDark} />
    </TouchableOpacity>
  );
}

