import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import Colors from '../constants/Colors';
import { auth } from '../firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    if (!email || !password) {
      alert('Please fill all the fields');
      return;
    }
    auth
      .signInWithEmailAndPassword(email.trim(), password)
      .then(() => {
        navigation.replace('RootBottomTab');
      })
      .catch((err) => alert(err.message));
  };

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.bottomContainer}>
            <Text style={styles.note}>
              Note: This app doesn't have any link to the official
              Messenger/Facebook version
            </Text>
            <TextInput
              placeholder="Email"
              style={styles.input}
              autoCapitalize={false}
              value={email}
              onChangeText={setEmail}
            />
            <View style={styles.breakline} />
            <TextInput
              placeholder="Password"
              placeholderStyle={styles.placeholder}
              style={styles.input}
              secureTextEntry
              autoCapitalize={false}
              value={password}
              onChangeText={setPassword}
              onSubmitEditting={loginHandler}
            />

            <TouchableOpacity style={styles.loginBtn} onPress={loginHandler}>
              <Text style={styles.loginBtnText}>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signUpCTA}>
                Don't have an account? Create one!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: 32,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
  bottomContainer: {
    paddingBottom: 40,
  },
  note: {
    color: Colors.light.text2,
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
  loginBtn: {
    borderRadius: 16,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    width: '100%',
    marginVertical: 16,
  },
  loginBtnText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
  },
  signUpCTA: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.blue,
  },
});
