import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class ReviewDetails extends Component {
  constructor() {
    super();
    this.state = {
      userId: 0,
      id: 0,
      title: '',
      body: '',
    };
  }
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>reviewdetails</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ReviewDetails;
