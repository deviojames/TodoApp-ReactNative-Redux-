import NavigationBar from 'react-native-navbar';
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux';
import { themeable } from '../themes';
import { toggleTodo, setVisibilityFilter } from '../actions';
import Todos from '../components/Todos';
import Filter from '../components/Filter';
import NewTodo from './AddTodoScene';

class TodoListScene extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      todos,
      style,
      navBarStyle,
      statusBarTintColor,
      statusBarStyle,
      navBarBtnTextColor,
      onFilterPress,
      onTodoPress,
      activeOnly
    } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView horizontal={false}>
          <Todos todos={todos} onTodoPress={onTodoPress}/>
        </ScrollView>
        <Filter activeOnly={activeOnly} onPress={onFilterPress} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: "space-between",
    alignItems: 'stretch',
  },
})

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ALL':
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    activeOnly: state.visibilityFilter === 'SHOW_ALL'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoPress: (id) => {
      dispatch(toggleTodo(id));
    },
    onFilterPress: (activeOnly) => {
      const filter = activeOnly ? 'SHOW_ALL' : 'SHOW_COMPLETED';
      dispatch(setVisibilityFilter(filter));
    }
  };
};

const TodoListSceneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListScene);

const ThemableTodoListScene = themeable(TodoListSceneContainer, (theme) => {
  const {styles, variables} = theme;
  return {
    style: styles.container,
    navBarStyle: styles.navBar,
    statusBarTintColor: variables.colorNavBg,
    statusBarStyle: variables.statusBarStyle,
    navBarBtnTextColor: variables.colorNavbarText,
    filterStyle: styles.filterItem,
    filterTextStyle: styles.filterTextStyle
  };
});

export default ThemableTodoListScene;
