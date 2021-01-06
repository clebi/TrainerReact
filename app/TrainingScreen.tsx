import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
        <Text>{this.props.route.params.training.title}</Text>
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

export default connector(TrainingScreen);
