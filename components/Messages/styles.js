import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 3,
  },
  messageTime: {
    fontSize: 12,
    textTransform: 'uppercase',
    position: 'absolute',
    bottom: 12,
    right: 10,
  },
  alignLeft: {
    left: 48,
  },
  messageUserName: {
    position: 'absolute',
    fontSize: 12,
    marginLeft: 48,
    top: 14,
  },
  profileImage: {
    position: 'absolute',
    bottom: 0,
    left: 4,
  },
  extraMargin: {
    marginTop: 32,
  },
  like: {
    marginTop: 32,
    marginLeft: 48,
    alignSelf: 'flex-start',
  },
  myLike: {
    marginTop: 12,
    marginBottom: 8,
    alignSelf: 'flex-end',
  },
  message: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 10,
    // limit message length

    marginHorizontal: 42,
    alignSelf: 'flex-start',
  },
  myMessage: {
    backgroundColor: Colors.primaryLight,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    // limit messsage length
    marginLeft: 96,
    marginRight: 0,
    alignSelf: 'flex-end',
  },
  image: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    // limit message length
    marginHorizontal: 42,
    alignSelf: 'flex-start',
  },
  myImage: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    // limit messsage length
    marginLeft: 96,
    marginRight: 0,
    alignSelf: 'flex-end',
  },
  radiusTop: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  radiusBottom: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  radius: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  messageText: {
    fontSize: 16,
  },
  myMessageText: {
    color: Colors.white,
  },
});
