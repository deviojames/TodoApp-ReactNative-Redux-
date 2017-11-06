import NavigationBar from 'react-native-navbar';
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { themeable } from '../themes';
import { addTodo } from '../actions';
import AddTodo from '../components/AddTodo';

class NewTodo extends Component {
  constructor(props) {
    super(props);

    this.save = this.save.bind(this);
  }

  save(text) {
    this.props.saveTodo(text);
  }

  render() {
    const {
      style,
    } = this.props;

    return (
      <View style={styles.container}>
          <AddTodo style={{height:30}} saveTodo={this.save} onFinish={this.done} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveTodo: (title) => {
      dispatch(addTodo(title));
    }
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'stretch',
  },
})
const NewTodoContainer = connect(
  () => ({}),
  mapDispatchToProps
)(NewTodo);


const ThemableAddTodo = themeable(NewTodoContainer, (theme) => {

});

export default ThemableAddTodo;
