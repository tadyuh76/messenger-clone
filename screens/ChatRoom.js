import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Colors from '../constants/Colors';
import Screen from '../components/Screen';
import ChatMessage from '../components/Messages';
import InputMessageField from '../components/ChatRoomInput';
import { db } from '../firebase';

export default function ChatRoomScreen({ route }) {
  const ScrollViewRef = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection('chatRooms')
      .doc(route.params.id)
      .collection('messages')
      .orderBy('time', 'asc')
      .onSnapshot((snapshot) => setMessages(snapshot.docs));
  }, [route]);

  return (
    <Screen>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={80}
          style={{ flex: 1 }}>
          <ScrollView
            ref={ScrollViewRef}
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews
            onContentSizeChange={() =>
              ScrollViewRef.current.scrollToEnd({ animated: true })
            }>
            {messages.map((item, index) => (
              <ChatMessage
                messages={[
                  messages[index - 1]?.data(),
                  messages[index].data(),
                  messages[index + 1]?.data(),
                ]} // for styling
                item={item.data()}
                key={item.id}
                index={index}
              />
            ))}
          </ScrollView>

          <InputMessageField
            chatRoomId={route.params.id}
            ScrollViewRef={ScrollViewRef}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 20,
  },
  contentContainer: {
    paddingVertical: 8,
  },
});
