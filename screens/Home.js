import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import moment from 'moment';
import { db } from '../firebase';

// Components
import Screen from '../components/Screen';
import ChatItem from '../components/ChatItem';
import { HomeScreenSubHeader } from '../components/TabScreenHeader';

export default function HomeScreen({ navigation }) {
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    db.collection('chatRooms')
      .orderBy('groupName')
      .onSnapshot(
        (snapshot) =>
          setChatRooms(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          ),
        (err) => console.log(err.message)
      );
  }, []);

  return (
    <Screen>
      <FlatList
        keyExtractor={(item) => item.id}
        ListHeaderComponent={HomeScreenSubHeader}
        data={chatRooms}
        renderItem={({ item }) => <ChatItem data={item.data} id={item.id} />}
      />
    </Screen>
  );
}
