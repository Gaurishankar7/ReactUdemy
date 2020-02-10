import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen'
import ListScreen from './src/screens/ListScreen' 
import ImageScreen from './src/screens/ImageScreen'
import CounterScreen from './src/screens/CounterScreen'
import ColorScreen from './src/screens/ColorScreen'
import SquareScreen from './src/screens/SquareScreen'
import ColorCounter from './src/Components/ColorCounter'
import TextScreen from './src/screens/TextScreen'
import BoxScreen from './src/screens/BoxScreen'
import SearchScreen from './src/screens/SearchScreen';
import IndexScreen from './src/screens/IndexScreen';
import { Provider  } from './src/context/BlogContext'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentScreen: ComponentScreen,
    List: ListScreen,
    ImgView: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorScreen,
    Square: SquareScreen,
    ColorCounter: ColorCounter,
    TextScreen: TextScreen,
    Box: BoxScreen,
    Search: SearchScreen,
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
    // Color: ColorScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);
// export default createAppContainer(navigator);
const App = createAppContainer(navigator);
export default () => {
  return (
    <Provider>
          <App />
      </Provider>
  );

};


