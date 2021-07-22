import React from 'react';
import { View } from 'react-native';

import Colors from '../../constants/Colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import ProfileImage from '../ProfileImage';
import BackButton from '../BackButton';

import { useNavigation } from '@react-navigation/native';

export default function ChatRoomHeaderLeft(route) {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row' }}>
      <BackButton />
      <ProfileImage
        image={route.params.groupImage}
        style={{ marginHorizontal: 8 }}
      />
    </View>
  );
}
