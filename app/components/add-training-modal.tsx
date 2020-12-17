import React from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

interface AddTrainingModalProps {
  visible: boolean;
  addTraining: (name: string) => void;
}

interface AddTrainingModalState {
  trainingName: string;
}

export class AddTrainingModal extends React.Component<
  AddTrainingModalProps,
  AddTrainingModalState
> {
  constructor(props: AddTrainingModalProps) {
    super(props);
    this.state = {
      trainingName: '',
    };
  }
  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.visible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>New Training</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="name your training"
                onChangeText={(text) =>
                  this.setState({
                    trainingName: text,
                  })
                }
              />
              <Button
                title="Add training"
                onPress={() => this.props.addTraining(this.state.trainingName)}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
    width: '70%',
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 15,
  },
  modalInput: {
    height: 40,
    width: '95%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
