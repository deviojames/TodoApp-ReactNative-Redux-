import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';
import { themeable } from '../themes';
import PropTypes from 'prop-types';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const {todo, onTodoPress} = this.props;
    onTodoPress(todo.id);
  }

  renderButton() {
    if (this.props.todo.completed) {
      return <Icon name="check-circle" style={styles.completeTaskIcon} size={20} color="#999" />;
    } else {
      return <Icon name="circle-o" style={styles.completeTaskIcon} size={20} color="#999" />;
    }
  }

  render() {
    const {todo, style, timestampStyle} = this.props;
    const {title, createdAt, completedAt} = todo;
    return (
      <View style={style}>
        <TouchableHighlight
            onPress={this.onPress}
            activeOpacity={100 / 100}
            style={styles.completeTask}
            underlayColor='white'
            >
          {this.renderButton()}
        </TouchableHighlight>
        <View style={styles.detailsStyle}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={timestampStyle}>Added at: {createdAt.toGMTString()}</Text>
          {completedAt && <Text style={timestampStyle}>Completed at: {completedAt.toGMTString()}</Text>}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  detailsStyle: {
    flex: 1,
    padding: 10,
  },
  titleStyle: {
    color: 'blue',
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  completeTask: {
    padding: 10
  },
  completeTaskIcon: {
    fontSize: 25,
    color: '#ddd',
  },
});

const ThemeableTodo = themeable(Todo, (theme) => {
  const { styles } = theme;
  return {
    style: styles.todoItem,
    completeTaskColStyle: styles.todoItemCompleteTask,
    completeTaskIconStyle: styles.todoItemCompleteTaskIcon,
    detailsStyle: styles.todoItemDetails,
    timestampStyle: styles.todoItemTimeStamp,
    titleStyle: styles.todoItemTitle
  };
});

ThemeableTodo.propTypes = {
  todo: PropTypes.object.isRequired,
  onTodoPress: PropTypes.func.isRequired
};

export default ThemeableTodo;
