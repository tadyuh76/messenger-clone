import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Colors from '../constants/Colors';
import { blankProfileImg } from '../constants/Links';
import ImagePicker from '../components/ImagePicker';
import { auth } from '../firebase';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState(blankProfileImg);

  const signUpHandler = async () => {
    if (!(email && password && name)) {
      alert('Please fill all the fields');
      return;
    }
    try {
      const userCredentials = await auth.createUserWithEmailAndPassword(
        email.trim(),
        password
      );

      await userCredentials.user.updateProfile({
        displayName: name,
        photoURL: profileImage,
      });
      navigation.goBack();
      navigation.replace('RootBottomTab');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Create new Messenger account</Text>
        <View style={styles.content}>
          <View style={styles.topContainer}>
            <TextInput
              placeholder="Name"
              style={styles.input}
              autoCapitalize
              value={name}
              onChangeText={(name) => setName(name)}
            />
            <View style={styles.breakline} />
            <TextInput
              placeholder="Email"
              style={styles.input}
              autoCapitalize={false}
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
            <View style={styles.breakline} />
            <TextInput
              placeholder="Password"
              placeholderStyle={styles.placeholder}
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <ImagePicker
              name="profile"
              image={profileImage}
              setImage={setProfileImage}
              theme="light"
            />
          </View>

          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.signUpBtn} onPress={signUpHandler}>
              <Text style={styles.signUpBtnText}>Create account</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.loginCTA}>
                Already have an account? Login!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    marginHorizontal: 16,
  },
  input: {
    width: '100%',
    fontSize: 16,
    color: Colors.black,
    paddingVertical: 12,
  },
  placeholder: {
    fontSize: 16,
  },
  breakline: {
    height: 1,
    backgroundColor: Colors.light.secondary,
  },
  bottomContainer: {
    paddingBottom: 40,
    marginHorizontal: 16,
  },
  signUpBtn: {
    borderRadius: 16,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    width: '100%',
    marginVertical: 16,
  },
  signUpBtnText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
  },
  loginCTA: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.blue,
  },
});
