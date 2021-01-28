import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistInit, storeInit} from './configure-store';
import {RootStackParamList} from './navigation';
import TrainingScreen from './TrainingScreen';
import TrainingsScreen from './TrainingsScreen';
import TrainingStepScreen from './TrainingStepScreen';

const Stack = createStackNavigator<RootStackParamList>();
const store = storeInit();
const persistor = persistInit(store);

export default class Application extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Trainings">
              <Stack.Screen name="Trainings" component={TrainingsScreen} />
              <Stack.Screen
                name="Training"
                component={TrainingScreen}
                options={({route}) => ({title: route.params.training.title})}
              />
              <Stack.Screen
                name="TrainingStep"
                component={TrainingStepScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
