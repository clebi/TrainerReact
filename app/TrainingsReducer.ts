import {Reducer} from 'redux';
import {Training, TrainingsModel} from './models/Training';

export const ADD_TRAINING = 'training_add';
export const REMOVE_TRAINING = 'training_remove';

interface AddTraining {
  type: typeof ADD_TRAINING;
  payload: Training;
}

interface RemoveTraining {
  type: typeof REMOVE_TRAINING;
  payload: number;
}

export type TrainingActionTypes = AddTraining | RemoveTraining;

export const trainingsReducer: Reducer<TrainingsModel, TrainingActionTypes> = (
  state: TrainingsModel = {trainings: []},
  action: TrainingActionTypes,
) => {
  console.debug(action);
  switch (action.type) {
    case ADD_TRAINING:
      let training = action.payload as Training;
      return {
        trainings: [
          ...state.trainings,
          {
            key: `t_${training.title.toLowerCase().replace(/\s/, '')}`,
            ...training,
          },
        ],
      };
    case REMOVE_TRAINING:
      let index = action.payload as number;
      const trainings = state.trainings.filter((_, i) => i !== index);
      console.debug(trainings);
      return {trainings: trainings};
    default:
      return state;
  }
};
