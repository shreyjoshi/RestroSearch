import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
    title: 'Restaurant Search',
    })
  },
  ResultsShow: ResultsShowScreen
});

export default createAppContainer(AppNavigator);

/*import   createAppContainer  from 'react-navigation';
import createStackNavigator from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
	{
		Search: SearchScreen
	},
	{
		initialRouteName: 'Search',
		defaultNavigationOptions: {
			title: 'Restaurant Search'
		}
	}
});

export default createAppContainer(navigator);*/