import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import TrainingListView from './TrainingsListView';
import {ADD_TRAINING, trainingsReducer} from './TrainingsReducer';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class Application extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <TrainingListView />
        </SafeAreaView>
      </Provider>
    );
  }
}
