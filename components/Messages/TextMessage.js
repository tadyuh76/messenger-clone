import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../ThemeContext';
import ProfileImage from '../ProfileImage';
import Colors from '../../constants/Colors';
import moment from 'moment';
import styles from "./styles"

export default function TextMessage(
  item,
  isMyMessage,
  isContinue,
  willContinue,
  wasLike,
  willLike
) {
  const [isFocus, setIsFocus] = useState(false);

  const [theme] = useTheme();
  const messageColor = { backgroundColor: Colors[theme].secondary };
  const messageTextColor = { color: Colors[theme].text1 };
  const colorText2 = { color: Colors[theme].text2 };
  const messageFocusedColor = { backgroundColor: Colors[theme].text2 };

  const messageBoxStyles = [
    styles.message,
    messageColor,
    isMyMessage && styles.myMessage,
    !isMyMessage && (!isContinue || wasLike) && styles.extraMargin,

    willContinue && (!isContinue || wasLike) && styles.radiusTop,

    isContinue && (!willContinue || willLike) && styles.radiusBottom,

    ((!willContinue && (!isContinue || wasLike)) ||
      (!isContinue && willContinue && willLike)) &&
      styles.radius,
  ];

  const messageTextStyles = [
    styles.messageText,
    messageTextColor,
    isMyMessage && styles.myMessageText,
  ];

  const messageUserName = [styles.messageUserName, colorText2];

  const messageTimeStyles = [
    styles.messageTime,
    isMyMessage && styles.alignLeft,
    colorText2,
  ];

  /*-------------------------*/

  const onFocus = () => {
    setIsFocus((prevStatus) => !prevStatus);
  };

  return (
    <View style={styles.container}>
      {!isMyMessage && (!isContinue || (isContinue && wasLike)) && (
        <Text style={messageUserName}>{item.userName}</Text>
      )}
      {!isMyMessage &&
        (willLike || !willContinue || (willContinue && willLike)) && (
          <ProfileImage
            image={item.userImage}
            style={styles.profileImage}
            size={26}
          />
        )}
      <TouchableOpacity onPress={onFocus} activeOpacity={0.8}>
        <View style={messageBoxStyles}>
          <Text style={messageTextStyles}>{item.content}</Text>
        </View>

        {isFocus && (
          <Text style={messageTimeStyles}>
            {moment(item.time.toDate()).format('hh:mm')}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
