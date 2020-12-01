import {Reducer} from 'redux';
import {Training, TrainingsModel} from './models/Training';

export const ADD_TRAINING = 'training_add';

interface AddTraining {
  type: typeof ADD_TRAINING;
  payload: Training;
}

export type TrainingActionTypes = AddTraining;

export const trainingsReducer: Reducer<TrainingsModel, TrainingActionTypes> = (
  state: TrainingsModel = {trainings: []},
  action: TrainingActionTypes,
) => {
  switch (action.type) {
    case ADD_TRAINING:
      state.trainings.push({
        key: `t_${action.payload.title.toLowerCase().replace(/\s/, '')}`,
        ...action.payload,
      });
      return state;
    default:
      return state;
  }
};
