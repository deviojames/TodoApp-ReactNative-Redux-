//'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';

export default class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {value: null};
  }
  handleOnChange = (text) => {
    this.setState({value: text});
  }
  addTodo = () => {
    this.props.addTodo(this.state.value);
    this.props.hideModal();
    this.setState({value: null});
  }
  render() {
    var {hideModal} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
        </View>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            onChangeText={this.handleOnChange}
            value={this.state.value} />
          <TouchableOpacity
            style={styles.button}
            onPress={this.addTodo}>
            <Text style={styles.buttonText}>Add Todo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  button: {
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
      color:'white',
    textAlign: 'center'
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },

  toolbar: {
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  toolbarButton: {
    width: 50
  },
  toolbarTitle: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
