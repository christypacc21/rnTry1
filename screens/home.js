import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: 0,
      errors: {},
      isLoading: true,
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        this.setState({isLoading: false, data: data});
      });
  }

  pressHandler = () => {
    this.props.navigation.push('ReviewDetails');
  };

  pressItem = (id) => {
    this.props.navigation.push('ReviewDetails');
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text>Is Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Button
            style={styles.button}
            title="go to review page"
            onPress={this.pressHandler}
          />

          <Text>Enter name: {this.state.name}</Text>
          <TextInput
            style={styles.input}
            placeholder="eg Roy"
            onChangeText={(val) => this.setState({name: val})}
          />

          <Text>Enter age: {this.state.age}</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="eg 100"
            onChangeText={(val) => this.setState({age: val})}
          />
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => this.pressItem(item.id)}>
                <Text style={styles.item}>
                  {item.id} {item.title}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  button: {
    borderWidth: 1,
    borderColor: '#777',
    backgroundColor: 'black',
  },
  item: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'pink',
    fontSize: 13,
    marginHorizontal: 10,
  },
});

export default Home;
