import React from 'react';
import {Pressable, FlatList, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import {RootState} from '../configure-store';
import {TrainingModel} from '../models/Training';
import {REMOVE_TRAINING} from '../TrainingsReducer';

const mapStateToProps = (state: RootState) => {
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

type TrainingListViewProps = PropsFromRedux & {
  selectTraining: (training: TrainingModel) => void;
};

class TrainingListView extends React.Component<TrainingListViewProps> {
  constructor(props: TrainingListViewProps) {
    super(props);
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.props.trainings}
          renderItem={(listItem) => (
            <Pressable
              style={styles.item}
              onPress={() => this.props.selectTraining(listItem.item)}>
              <Text style={styles.title}>{listItem.item.title}</Text>
              <Text style={styles.duration}>
                duration:{' '}
                {listItem.item.steps
                  .map((step) => step.duration)
                  .reduce((previous, current) => previous + current, 0)}
              </Text>
              <Pressable onPress={() => this.delete(listItem.index)}>
                <Icon name="delete-outline" size={25} />
              </Pressable>
            </Pressable>
          )}
        />
      </View>
    );
  }
  delete(index: number) {
    this.props.removeTraining(index);
  }
}

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

export default connector(TrainingListView);
