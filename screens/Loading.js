import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../constants/Colors';
import { auth } from '../firebase';
import { useTheme } from '../ThemeContext';

export default function LoadingScreen({ navigation }) {
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    try {
      const loadTheme = async () => {
        let prevTheme = await AsyncStorage.getItem('prevTheme');
        if (prevTheme != null) setTheme(prevTheme);
      };
      loadTheme();
      
      auth.onAuthStateChanged((user) => {
        user
          ? navigation.replace('RootBottomTab')
          : navigation.replace('Login');
      });
    } catch (err) {
      alert(err.message);
    }
  }, [navigation, setTheme]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.credit}>
          from <Text style={styles.fb}>Facebook</Text>
          <Text style={styles.myName}> Tad Yuh</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  bottomContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  credit: {
    color: Colors.dark.text2,
    fontSize: 16,
    letterSpacing: 2,
  },
  fb: {
    textDecorationLine: 'line-through',
  },
  myName: {
    fontWeight: 'bold',
    color: Colors.blue,
  },
});
