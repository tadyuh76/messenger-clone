import React from 'react';
import { auth } from '../../firebase';
import LikeMessage from './LikeMessage';
import TextMessage from './TextMessage';
import ImageMessage from './ImageMessage';

export default function ChatMessage({ item, messages, index }) {
  const prevID = messages[0]?.userId;
  const currentID = messages[1].userId;
  const nextID = messages[2]?.userId;

  const prevType = messages[0]?.type;
  const nextType = messages[2]?.type;

  // Check if text is continue from last
  const isContinue = currentID === prevID;
  // Check if text is continue to next
  const willContinue = currentID === nextID;
  // Check if text is mine
  const isMyMessage = currentID === auth.currentUser.uid;

  // Check if prev msg is text
  const wasLike = prevType === 'like';
  // Check if next msg is text
  const willLike = nextType === 'like';

  switch (item.type) {
    case 'like':
      return LikeMessage(item, isMyMessage);
    case 'message':
      return TextMessage(
        item,
        isMyMessage,
        isContinue,
        willContinue,
        wasLike,
        willLike
      );
    case 'image':
      return ImageMessage(
        item,
        isMyMessage,
        isContinue,
        willContinue,
        wasLike,
        willLike
      );
    default:
      return TextMessage(
        item,
        isMyMessage,
        isContinue,
        willContinue,
        wasLike,
        willLike
      );
  }
}
