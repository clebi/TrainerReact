import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, TouchableOpacity as Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect, ConnectedProps} from 'react-redux';
import {AddTrainingModal} from './components/add-training-modal';
import TrainingListView from './components/TrainingsListView';
import {RootStackParamList} from './navigation';
import {ADD_TRAINING} from './TrainingsReducer';

type TrainingsNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Trainings'
>;

const connector = connect();
type PropsFromRedux = ConnectedProps<typeof connector>;

type TrainingsScreenProps = PropsFromRedux & {
  navigation: TrainingsNavigationProp;
};

interface TrainingsScreenState {
  addTrainingVisible: boolean;
}

class TrainingsScreen extends React.Component<
  TrainingsScreenProps,
  TrainingsScreenState
> {
  constructor(props: TrainingsScreenProps) {
    super(props);
    this.state = {
      addTrainingVisible: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TrainingListView />
        <Pressable
          style={styles.addButton}
          onPress={() => this.newTrainingModal()}>
          <Icon name="add-circle" size={75} color="#01a699" />
        </Pressable>
        <AddTrainingModal
          visible={this.state.addTrainingVisible}
          addTraining={this.addTraining.bind(this)}
        />
      </View>
    );
  }
  newTrainingModal() {
    this.setState({
      addTrainingVisible: true,
    });
  }
  addTraining(name: string) {
    this.setState({
      ...this.state,
      addTrainingVisible: false,
    });
    this.props.dispatch({
      type: ADD_TRAINING,
      payload: {title: name, steps: []},
    });
  }
}

export default connect()(TrainingsScreen);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  addButton: {
    width: 70,
    position: 'absolute',
    bottom: 30,
    right: 25,
    height: 70,
    borderRadius: 30,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
