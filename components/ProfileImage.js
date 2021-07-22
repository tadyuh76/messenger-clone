import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

export default ({ image, style, onPress, size = 36 }) => {
  const imageStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    ...style,
  };

  return onPress ? (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <Image
        source={{
          uri: image
        }}
        style={imageStyle}
      />
    </TouchableOpacity>
  ) : (
    <Image
      source={{
        uri: image,
      }}
      style={imageStyle}
    />
  );
};
