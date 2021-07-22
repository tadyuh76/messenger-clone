import React, { useState, useRef } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

import { useTheme } from '../../ThemeContext';
import Colors from '../../constants/Colors';
import { firebase, auth, db } from '../../firebase';
import { Audio } from 'expo-av';
import { sendLikeSound, sendMessageSound } from './sounds';

// Icons
import SendImageIcon from './SendImageIcon';
import GridIcon from './GridIcon';
import CameraIcon from './CameraIcon';
import MicrophoneIcon from './MicrophoneIcon';
import ChevronRight from './ChevronRight';
import SendIcon from './SendIcon';
import LikeIcon from './LikeIcon';
import SmileIcon from './SmileIcon';

export default function InputMessageField({ chatRoomId, ScrollViewRef }) {
  const [message, setMessage] = useState('');
  const [placeholder, setPlaceholder] = useState('Aa');
  const [isFocused, setIsFocused] = useState(false);

  const onChangeText = (text) => {
    setMessage(text);
    !isFocused && setIsFocused(true);
  };

  const onFocus = () => {
    setPlaceholder('Type a message...');
    setIsFocused(true);
    setTimeout(
      () =>
        ScrollViewRef.current.scrollToEnd({
          animated: true,
        }),
      300
    ); // wait until the keyboard shows
  };

  const onBlur = () => {
    setPlaceholder('Aa');
    setIsFocused(false);
  };

  const playSound = async (soundTrack) => {
    const { sound } = await Audio.Sound.createAsync(soundTrack);
    await sound.playAsync();
  };

  const authUser = auth.currentUser;
  const dbRef = db
    .collection('chatRooms')
    .doc(chatRoomId)
    .collection('messages');

  const sendMessage = async (type, img) => {
    let content;
    switch (type) {
      case 'message': {
        content = message.trim();
        playSound(sendMessageSound);
        break;
      }
      case 'image': {
        content = img
        playSound(sendMessageSound);
        break;
      }
      case 'like': {
        content = '';
        playSound(sendLikeSound);
        break;
      }

      default:
        return;
    }

    dbRef.add({
      userId: authUser.uid,
      userName: authUser.displayName,
      userImage: authUser.photoURL,
      content,
      type,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessage('');
  };

  // Dynamic styles
  const [theme] = useTheme();
  const midContainerColor = { backgroundColor: Colors[theme].secondary };
  const inputTextColor = { color: Colors[theme].text1 };

  return (
    <View style={styles.container}>
      {isFocused ? (
        <ChevronRight onPress={onBlur} />
      ) : (
        <View style={styles.leftContainer}>
          <GridIcon />

          <CameraIcon />

          <SendImageIcon sendMessage={sendMessage} />

          <MicrophoneIcon />
        </View>
      )}

      <View style={[styles.midContainer, midContainerColor]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={Colors[theme].text2}
          style={[
            styles.input,
            inputTextColor,
            !isFocused && { maxHeight: 36 },
          ]}
          multiline
          textAlignVertical="center"
          onFocus={onFocus}
          onBlur={onBlur}
          onChangeText={onChangeText}
          value={message}
        />

        <SmileIcon />
      </View>

      <View style={styles.rightContainer}>
        {message ? (
          <SendIcon
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        ) : (
          <LikeIcon onPress={sendMessage} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'flex-end',
  },
  leftContainer: {
    flexDirection: 'row',
    left: 0,
    width: 150,
    paddingBottom: 6,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  midContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 4,
    maxHeight: 100,
    alignSelf: 'center',
  },
  rightContainer: {
    right: 0,
    marginLeft: 16,
    paddingBottom: 6,
    alignItems: 'flex-end',
  },
});
