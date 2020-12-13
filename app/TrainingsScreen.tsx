import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackParamList} from './navigation';
import {TrainingListViewContainer} from './TrainingsListView';

type TrainingsNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Trainings'
>;

type TrainingsScreenProps = {
  navigation: TrainingsNavigationProp;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
  },
});

export class TrainingsScreen extends React.Component<TrainingsScreenProps> {
  constructor(props: TrainingsScreenProps) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TrainingListViewContainer />
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add-circle" size={65} color="#01a699" />
        </TouchableOpacity>
      </View>
    );
  }
}
