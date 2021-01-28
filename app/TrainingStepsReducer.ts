import {AnyAction, Reducer} from 'redux';
import {Step, StepModel} from './models/Training';
import {v4 as uuid} from 'uuid';

const TRAINING_STEP_ADD = 'training_step_add';

export const trainingStepsReducer: Reducer<StepModel[], AnyAction> = (
  state: StepModel[] = [],
  action: AnyAction,
) => {
  switch (action.type) {
    case TRAINING_STEP_ADD:
      const step = action.payload as Step;
      return [
        ...state,
        {
          key: uuid(),
          ...step,
        },
      ];
    default:
      return state;
  }
};
