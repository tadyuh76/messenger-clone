import React, { useState, useEffect } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import { useTheme } from '../ThemeContext';
import Bubble from './Bubble';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function () {
  const [theme, setTheme] = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark' ? true : false);

  // Whenever the theme changed, save the theme
  useEffect(() => {
    AsyncStorage.setItem('prevTheme', theme);
  }, [theme]);

  const toggleSwitch = (isDarkMode) => {
    setIsDarkMode((prev) => !prev);
    isDarkMode === true ? setTheme('dark') : setTheme('light');
  };

  const darkModeCTAColor = { color: Colors[theme].text1 };

  return (
    <View style={styles.section}>
      <View style={styles.sectionLeft}>
        <Bubble color={Colors.black}>
          <Ionicons name="moon" size={24} color={Colors.white} />
        </Bubble>
        <Text style={[styles.darkModeCTA, darkModeCTAColor]}>Dark mode</Text>
      </View>
      <Switch
        onValueChange={toggleSwitch}
        value={isDarkMode}
        thumbColor={isDarkMode ? Colors.blue : Colors.white}
        trackColor={{ true: Colors.lightBlue, false: Colors.white.secondary }}
      />
    </View>
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
  darkModeCTA: {
    fontSize: 16,
    marginLeft: 12,
  },
});
