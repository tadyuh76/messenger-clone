import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../ThemeContext';
import Colors from '../../constants/Colors';
import ProfileImage from '../ProfileImage';
import Like from '../Like';
import moment from 'moment';
import styles from './styles';

export default function LikeMessage(
  item,
  isMyMessage,
) {
  const [isFocus, setIsFocus] = useState(false);
  const [theme] = useTheme();

  const colorText2 = { color: Colors[theme].text2 };

  const likeStyles = [styles.like, isMyMessage && styles.myLike];

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
      {!isMyMessage && <Text style={messageUserName}>{item.userName}</Text>}
      {!isMyMessage && (
        <ProfileImage
          image={item.userImage}
          style={styles.profileImage}
          size={26}
        />
      )}
      <TouchableOpacity onPress={onFocus} activeOpacity={0.8}>
        <View style={likeStyles}>
          <Like size={36} />
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
