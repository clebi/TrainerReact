import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './navigation';
import TrainingsScreen from './TrainingsScreen';
import {PersistGate} from 'redux-persist/integration/react';
import {storeInit, persistInit} from './configure-store';

const Stack = createStackNavigator<RootStackParamList>();
const store = storeInit();
const persistor = persistInit(store);

export default class Application extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Trainings" component={TrainingsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
