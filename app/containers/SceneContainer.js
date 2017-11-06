import React, { Component } from 'react';
import {
  Navigator,
  ImageBackground,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { themeable } from '../themes';
import TodoList from './TodoListScene';
import { addTodo } from '../actions';
import AddTodo from './AddTodoScene'
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
  }
  configureScene() {
    return {
      ...Navigator.SceneConfigs.PushFromRight,
      gestures: {}
    };
  }
  save(text) {
    this.props.saveTodo(text);
  }

  render() {
    return (
      <View style={styles.mainBgImg}>
      <AddTodo />
      <TodoList/>
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
const NewTodoContainer = connect(
  () => ({}),
  mapDispatchToProps
)(Navigation);

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainBgImg: {
    width: width,
    height: height,
  },
})
const ThemeableNavigation = themeable(Navigation, (theme) => {
  const { styles, variables } = theme;
  return {
    mainBgImgStyle: styles.mainBgImg,
    mainBgImgSrc: variables.mainBgImg
  };
});

export default ThemeableNavigation;
