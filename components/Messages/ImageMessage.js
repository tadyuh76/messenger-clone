import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useTheme } from '../../ThemeContext';
import Colors from '../../constants/Colors';
import ProfileImage from '../ProfileImage';
import styles from './styles';

export default function ImageMessage(
  item,
  isMyMessage,
  isContinue,
  willContinue,
  wasLike,
  willLike
) {
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    Image.getSize(item.content, (width, height) => {
      // calculate image width and height
      const imageWidth = 200;
      const scaleFactor = width / imageWidth;
      const imageHeight = height / scaleFactor;

      setImgWidth(imageWidth);
      setImgHeight(imageHeight);
    });
  });
  const [theme] = useTheme();

  const colorText2 = { color: Colors[theme].text2 };
  const messageUserName = [styles.messageUserName, colorText2];

  const imageStyles = [
    styles.image,
    { width: imgWidth, height: imgHeight },
    isMyMessage && styles.myImage,
    !isMyMessage && (!isContinue || wasLike) && styles.extraMargin,

    willContinue && (!isContinue || wasLike) && styles.radiusTop,

    isContinue && (!willContinue || willLike) && styles.radiusBottom,

    ((!willContinue && (!isContinue || wasLike)) ||
      (!isContinue && willContinue && willLike)) &&
      styles.radius,
  ];

  const onPress = () => {};

  /*-------------------------*/

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

      <Image source={{ uri: item.content }} style={imageStyles} />
    </View>
  );
}
