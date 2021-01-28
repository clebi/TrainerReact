import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {RootStackParamList} from './navigation';

type TrainingStepNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Training'
>;

const connector = connect();

class TrainingStepScreen extends React.Component<TrainingStepNavigationProp> {
  render() {
    return (
      <View style={styles.container}>
        <Text>New tep</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
});

export default connector(TrainingStepScreen);
