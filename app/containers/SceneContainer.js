import React, { Component } from 'react';
import {
  Navigator,
  ImageBackground,
} from 'react-native';

import { themeable } from '../themes';
import TodoList from './TodoListScene';
import AddTodo from './AddTodoScene'

class Navigation extends Component {
  configureScene() {
    return {
      ...Navigator.SceneConfigs.PushFromRight,
      gestures: {}
    };
  }

  renderScene(route, navigator) {
    if (route.component) {
      return React.createElement(route.component, { navigator, ...route.passProps });
    }
  }

  render() {
    const {mainBgImgStyle, mainBgImgSrc} = this.props;

    return (
      <ImageBackground style={mainBgImgStyle} resizeMode={'cover'} source={mainBgImgSrc}>
      <AddTodo style={{flex:1}}/>
      <TodoList style={{flex:2}}/>
      </ImageBackground>
    );
  }
}

const ThemeableNavigation = themeable(Navigation, (theme) => {
  const { styles, variables } = theme;
  return {
    mainBgImgStyle: styles.mainBgImg,
    mainBgImgSrc: variables.mainBgImg
  };
});

export default ThemeableNavigation;
