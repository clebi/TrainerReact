import {AnyAction, Reducer} from 'redux';
import {Training, TrainingModel} from './models/Training';

export const ADD_TRAINING = 'training_add';
export const REMOVE_TRAINING = 'training_remove';

export const trainingsReducer: Reducer<TrainingModel[], AnyAction> = (
  state: TrainingModel[] = [],
  action: AnyAction,
) => {
  console.debug('trainings action: ', action);
  switch (action.type) {
    case ADD_TRAINING:
      let training = action.payload as Training;
      return [
        ...state,
        {
          key: `t_${training.title.toLowerCase().replace(/\s/, '')}`,
          ...training,
        },
      ];
    case REMOVE_TRAINING:
      let index = action.payload as number;
      const trainings = state.filter((_, i) => i !== index);
      return trainings;
    default:
      return state;
  }
};
