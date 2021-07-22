import React from 'react';

import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../../ThemeContext'
import Colors from '../../constants/Colors';
import Bubble from "../../components/Bubble"

export default function ChatScreenSubHeader() {
  const [theme] = useTheme()

  const searchBarColor = { backgroundColor: Colors[theme].secondary };
  const searchBarTextColor = { color: Colors[theme].text2 };
  const createRoomCTAColor = { color: Colors[theme].text1 };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={[styles.searchBar, searchBarColor]}>
          <Ionicons
            name="search"
            size={20}
            color={Colors[theme].text2}
            style={{ marginHorizontal: 16 }}
          />
          <Text style={[styles.searchBarText, searchBarTextColor]}>Search</Text>
        </View>
      </TouchableOpacity>

      <View>
        <Bubble size={56}>
          <MaterialIcons
            name="video-call"
            size={30}
            color={Colors[theme].text1}
          />
        </Bubble>
        <Text style={[styles.createRoomCTA, createRoomCTAColor]}>
          Create Room
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
  },
  searchBar: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderRadius: 24,
    marginBottom: 16,
  },
  searchBarText: {
    fontSize: 16,
  },
  createRoomCTA: {
    width: 56,
    textAlign: 'center',
    fontSize: 12,
    marginTop: 4
  },
});
