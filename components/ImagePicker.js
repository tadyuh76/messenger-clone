import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';

import Screen from '../components/Screen';
import ProfileImage from '../components/ProfileImage';
import Colors from '../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { auth, firebase } from '../firebase';

export default function AppImagePicker({ name, image, setImage, theme }) {
  useEffect(() => {
    const requestPermissions = async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.MediaLibrary.getPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    };
    requestPermissions();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Image,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
      const imgUrl = await uploadImage(result.uri);
      setImage(imgUrl);
    }
  };

  const uploadImage = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const ref = firebase
        .storage()
        .ref()
        .child(`${name}Images/${blob._data.name}`);

      await ref.put(blob);
      return ref.getDownloadURL();
    } catch (err) {
      console.log(err);
    }
  };

  const imagePickerTextColor = { color: Colors[theme].text2 };
  const imageBorderColor = { borderColor: Colors[theme].secondary };

  return (
    <View style={styles.imagePicker}>
      <Text style={[styles.imagePickerText, imagePickerTextColor]}>
        Choose a beautiful {name} image!
      </Text>
      <View style={[styles.imageBorder, imageBorderColor]}>
        <ProfileImage
          style={styles.groupImage}
          onPress={pickImage}
          image={image}
          size={160}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePicker: {
    paddingTop: 16,
    alignSelf: 'center',
    alignItems: 'center',
  },
  imagePickerText: {
    fontSize: 16,
  },
  groupImage: {
    margin: 4,
  },
  imageBorder: {
    borderWidth: 6,
    borderRadius: 180 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 12,
  },
});
