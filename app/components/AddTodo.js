import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput,StyleSheet,Button } from 'react-native';
import { themeable } from '../themes';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      disabled:true
    };
    this.save = this.save.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(text) {
    this.setState({text});
  }


  save() {
    if(this.state.text != ''){
      this.props.saveTodo(this.state.text);
      this.setState({text: ''});
    }
  }
  render() {
    const { style, placeholderTextColor } = this.props;
    return (
      <View style={ styles.todoEditForm }>
        <TextInput
          style={ styles.addTodoInput }
          placeholder={ 'Add Todo Here' }
          placeholderTextColor={ placeholderTextColor }
          onChangeText={ this.handleTextChange }
          value={ this.state.text || '' }
        />
        <Button
        onPress={this.save}
        title="ADD TODO"
        color="#841584"
      />
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
addTodoInput: {
  borderWidth: 1,
  borderRadius: 5,
  height: 40,
  width:360,
  paddingLeft: 10,
  paddingRight: 10,
},
todoEditForm: {
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 30,
  paddingLeft: 10,
  paddingRight: 10,
},
})
const ThemeableAddTodo = themeable(AddTodo, (theme) => {
  const { styles, variables } = theme;
  return {
    placeholderTextColor: variables.colorPlaceHolderText,
    style: styles.todoEditForm,
    textInputStyle: styles.addTodoInput
  };
});

ThemeableAddTodo.propTypes = {
  saveTodo: PropTypes.func,
  onFinish: PropTypes.func
};

export default ThemeableAddTodo;
