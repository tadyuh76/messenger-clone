import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import Colors from '../constants/Colors';
import { useTheme } from '../ThemeContext';

export default function PeopleScreen() {
  const [theme] = useTheme();

  const textStyle = {
    fontSize: 16,
    color: Colors[theme].text2,
    fontWeight: 'bold',
  };

  return (
    <Screen style={styles.container}>
      <Text style={textStyle}>Under development...</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
