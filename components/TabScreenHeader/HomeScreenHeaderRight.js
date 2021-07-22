import React from 'react';
import { View, StyleSheet } from 'react-native';
import Bubble from '../Bubble';

import Colors from '../../constants/Colors';
import { useTheme } from '../../ThemeContext';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ChatScreenHeaderRight() {
  const navigation = useNavigation();
  const [theme] = useTheme();

  return (
    <View style={styles.container}>
      <Bubble>
        <Ionicons name="camera" size={24} color={Colors[theme].text1} />
      </Bubble>
      <Bubble onPress={() => navigation.navigate('AddChat')}>
        <MaterialCommunityIcons
          name="pencil"
          size={24}
          color={Colors[theme].text1}
        />
      </Bubble>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 16,
  },
});
