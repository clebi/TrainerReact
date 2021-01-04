import React from 'react';
import {Pressable, FlatList, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import {TrainingsModel} from '../models/Training';
import {REMOVE_TRAINING} from '../TrainingsReducer';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '60%',
  },
  duration: {
    fontSize: 16,
    textAlignVertical: 'center',
    width: '30%',
  },
});

const mapStateToProps = (state: TrainingsModel) => {
  return {trainings: state.trainings};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    removeTraining: (index: number) =>
      dispatch({type: REMOVE_TRAINING, payload: index}),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type TrainingListViewProps = PropsFromRedux;

class TrainingListView extends React.Component<TrainingListViewProps> {
  constructor(props: TrainingListViewProps) {
    super(props);
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.props.trainings}
          renderItem={(item) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.item.title}</Text>
              <Text style={styles.duration}>
                duration:{' '}
                {item.item.steps
                  .map((step) => step.duration)
                  .reduce((previous, current) => previous + current, 0)}
              </Text>
              <Pressable onPress={() => this.delete(item.index)}>
                <Icon name="delete-outline" size={25} />
              </Pressable>
            </View>
          )}
        />
      </View>
    );
  }
  delete(index: number) {
    this.props.removeTraining(index);
  }
}

export default connector(TrainingListView);
