import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from './configure-store';
import {RootStackParamList} from './navigation';

type TrainingNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Training'
>;

type TrainingRouteProp = RouteProp<RootStackParamList, 'Training'>;

const mapStateToProps = (state: RootState) => {
  return {trainings: state.trainings};
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type TrainingScreenProps = PropsFromRedux & {
  navigation: TrainingNavigationProp;
  route: TrainingRouteProp;
};

class TrainingScreen extends React.Component<TrainingScreenProps> {
  constructor(props: TrainingScreenProps) {
    super(props);
    console.debug('props', this.props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Pressable
          style={styles.addButton}
          onPress={() => this.props.navigation.navigate('TrainingStep', {})}>
          <Icon name="add-circle" size={75} color="#01a699" />
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default connector(TrainingScreen);
