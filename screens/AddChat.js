import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from 'react-native';

import { blankProfileImg } from '../constants/Links';
import ImagePicker from '../components/ImagePicker';
import { useTheme } from '../ThemeContext';
import Screen from '../components/Screen';
import Colors from '../constants/Colors';
import { db } from '../firebase';

export default function AddChatScreen({ navigation }) {
  const [groupName, setGroupName] = useState('');
  const [groupImage, setGroupImage] = useState(blankProfileImg);

  const addChatHandler = async () => {
    // group Name is required
    if (groupName) {
      await db.collection('chatRooms').add({
        groupName,
        groupImage,
      });
      navigation.goBack();
      return;
    }

    // if there is not any groupName
    alert('Please enter group name!');
  };

  const [theme] = useTheme();
  const inputTextColor = { color: Colors[theme].text1 };
  const inputBorderColor = { borderColor: Colors[theme].secondary };

  return (
    <Screen>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <TextInput
              placeholder="Group name (Required)"
              placeholderTextColor={Colors[theme].text2}
              value={groupName}
              onChangeText={setGroupName}
              onSubmitEditting={addChatHandler}
              style={[styles.input, inputBorderColor, inputTextColor]}
            />

            <ImagePicker
              name="group"
              image={groupImage}
              setImage={setGroupImage}
              theme={theme}
            />
          </View>

          <TouchableOpacity
            onPress={addChatHandler}
            activeOpacity={0.5}
            style={styles.createChatBtn}>
            <Text style={styles.createChatBtnText}>Create</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    flex: 1,
  },
  topContainer: {
    marginTop: 16,
  },
  input: {
    fontSize: 16,
    paddingVertical: 12,
    marginHorizontal: 16,
    borderBottomWidth: 1,
  },
  createChatBtn: {
    backgroundColor: Colors.blue,
    marginBottom: 32,
    borderRadius: 16,
    paddingVertical: 14,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createChatBtnText: {
    color: Colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
