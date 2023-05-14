import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, Text, StyleSheet } from 'react-native';

export default class FriendScreen extends Component {
  render() {
    const friend = this.props.route.params.friend;
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        style={styles.scrollview}>
        <Image style={styles.image} source={{ uri: friend.picture.large }} />
        <Text>{friend.name.first} {friend.name.last}</Text>
      </ScrollView>
    );
  }
}

const width = Dimensions.get('window').width * 0.75;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: width,
    height: width,
    marginBottom: 20,
  },
  scrollview: {
    backgroundColor: '#fff',
  },
});
