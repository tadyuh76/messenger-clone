import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { auth, firebase } from '../../firebase';
import * as ImagePicker from 'expo-image-picker';

export default function SendImageIcon({ sendMessage }) {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Image,
      allowsEditing: true,
      quality: 1,
    });
    if (result.cancelled) return;

    const imgUrl = await uploadImage(result.uri);
    sendMessage('image', imgUrl);
  };

  const uploadImage = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const ref = firebase
        .storage()
        .ref()
        .child(`userImages/${auth.currentUser.uid}/ ${blob._data.name}`);

      await ref.put(blob);
      return ref.getDownloadURL();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <Ionicons name="image" size={25} color={Colors.primaryDark} />
    </TouchableOpacity>
  );
}
