import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Colors from '../constants/Colors';
import { useTheme } from '../ThemeContext';
import { auth } from '../firebase';

// Components
import Screen from '../components/Screen';
import DarkModeSection from '../components/DarkModeSection';
import LogOutSection from '../components/LogOutSection';
import ProfileImage from '../components/ProfileImage';

export default function SettingScreen() {
  const [theme] = useTheme();
  const profileNameColor = { color: Colors[theme].text1 };

  return (
    <Screen style={styles.screen}>
      <View style={styles.profile}>
        <ProfileImage image={auth.currentUser.photoURL} size={100} />
        <Text style={[styles.profileName, profileNameColor]}>
          {auth.currentUser.displayName}
        </Text>
      </View>
      <DarkModeSection />
      <LogOutSection />
    </Screen>
  );
}

const styles = StyleSheet.create({
  profile: {
    marginTop: 10,
    marginBottom: 16,
    alignSelf: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 16,
  },
});
