import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import Bubble from './Bubble';
import Colors from '../constants/Colors';
import { Feather } from '@expo/vector-icons';

import { useTheme } from '../ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

export default function () {
  const navigation = useNavigation();
  const [theme] = useTheme();
  const logOutCTAColor = { color: Colors[theme].text1 };

  const logOutHandler = () => {
    navigation.popToTop();
    auth.signOut();
  };

  return (
    <TouchableHighlight
      underlayColor={Colors[theme].secondary}
      onPress={logOutHandler}>
      <View style={styles.section}>
        <View style={styles.sectionLeft}>
          <Bubble color="#ff0406">
            <Feather name="log-out" size={24} color={Colors.white} />
          </Bubble>
          <Text style={[styles.logOutCTA, logOutCTAColor]}>Log Out</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  sectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logOutCTA: {
    fontSize: 16,
    marginLeft: 12,
  },
});
