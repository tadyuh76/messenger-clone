import React from 'react';
import ProfileImage from '../ProfileImage';

import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase';

export default function TabScreenHeaderLeft() {
  const navigation = useNavigation();

  return (
    <ProfileImage
      image={auth.currentUser?.photoURL}
      style={{ marginLeft: 16 }}
      onPress={() => navigation.push('Settings')}
    />
  );
}
