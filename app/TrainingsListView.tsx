import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect, ConnectedProps} from 'react-redux';
import {TrainingsModel} from './models/Training';

const mapStateToProps = (state: TrainingsModel) => {
  return {trainings: state.trainings};
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
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
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: '#fff',
  },
});

class TrainingListView extends React.Component<PropsFromRedux> {
  constructor(props: PropsFromRedux) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
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
              <Icon name="delete-outline" size={25} />
            </View>
          )}
        />
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add-circle" size={65} color="#01a699" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default connector(TrainingListView);
