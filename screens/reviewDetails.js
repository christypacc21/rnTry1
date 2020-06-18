import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ReviewDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>Reviewdetails</Text>

      <Text style={styles.item}>UserID: {navigation.getParam('userId')}</Text>
      <Text style={styles.item}>PostID: {navigation.getParam('id')}</Text>
      <Text style={styles.item}>Title: {navigation.getParam('title')}</Text>
      <Text style={styles.item}>Content: {navigation.getParam('body')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
  item: {
    margin: 15,
  },
});

export default ReviewDetails;
