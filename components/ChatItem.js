import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

import { useTheme } from '../ThemeContext';
import Colors from '../constants/Colors';
import ProfileImage from './ProfileImage';
import Like from './Like';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../firebase';

export default function ChatItem({ data: { groupImage, groupName }, id }) {
  const navigation = useNavigation();

  const [lastMsg, setLastMsg] = useState({
    content: '',
    time: '',
    userId: '',
    userName: '',
  });

  useEffect(() => {
    db.collection('chatRooms')
      .doc(id)
      .collection('messages')
      .orderBy('time', 'desc')
      .onSnapshot(async (snap) => {
        const message = await snap.docs[0].data();
        setLastMsg((lastMsg) => ({
          content: message.content,
          type: message.type,
          time: message.time?.toDate(),
          userId: message.userId,
          userName: message.userName,
        }));
      });
  }, [id, setLastMsg]);

  const userName =
    lastMsg.userId !== auth.currentUser.uid ? `${lastMsg.userName}: ` : '';

  let lastMessage;
  if (lastMsg.type === 'like') {
    lastMessage = <Like size={16} />;
  } else if (lastMsg.type === 'message') {
    lastMessage = lastMsg.content;
  } else {
    lastMessage = userName ? 'sent an image.' : 'You sent an image.';
  }

  const [theme] = useTheme();

  const colorText2 = { color: Colors[theme].text2 };
  const underlayColor = Colors[theme].secondary;

  return (
    <TouchableHighlight
      underlayColor={underlayColor}
      onPress={() =>
        navigation.navigate('ChatRoom', {
          id,
          groupName,
          groupImage,
        })
      }>
      <View style={styles.chatContainer}>
        <View>
          <ProfileImage image={groupImage} size={54} />
        </View>
        <View style={styles.content}>
          <Text style={[styles.name, colorText2]} numberOfLines={1}>
            {groupName}
          </Text>
          {!!lastMsg.type && (
            <View style={styles.msgContainer}>
              <Text style={[styles.message, colorText2]} numberOfLines={1}>
                {userName}
                {lastMessage}
                {' - '}
              </Text>
              <Text style={[colorText2]}>
                {moment(lastMsg.time).format('hh:mm')}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    width: '100%',
    paddingHorizontal: 16,
    marginVertical: 12,
    flexDirection: 'row',
  },
  msgContainer: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    marginBottom: 2,
    maxWidth: '80%',
  },
  message: {
    fontSize: 14,
    maxWidth: '80%',
  },
});
