import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {ADD_TRAINING, trainingsReducer} from './TrainingsReducer';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './navigation';
import TrainingsScreen from './TrainingsScreen';

const Stack = createStackNavigator<RootStackParamList>();

const store = createStore(trainingsReducer);
store.dispatch({
  type: ADD_TRAINING,
  payload: {
    title: 'Test 1',
    steps: [
      {duration: 120, power: 150},
      {duration: 60, power: 300},
    ],
  },
});
store.dispatch({
  type: ADD_TRAINING,
  payload: {title: 'Test 2', steps: [{duration: 250, power: 100}]},
});

export default class Application extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Trainings" component={TrainingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
