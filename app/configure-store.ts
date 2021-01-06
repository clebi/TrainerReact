import AsyncStorage from '@react-native-async-storage/async-storage';
import {AnyAction, combineReducers, createStore, Store} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {TrainingModel} from './models/Training';
import {trainingsReducer} from './TrainingsReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export interface RootState {
  trainings: TrainingModel[];
}

const rootReducer = combineReducers<RootState, AnyAction>({
  trainings: trainingsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const storeInit = () => {
  return createStore(persistedReducer);
};

export const persistInit = (store: Store) => {
  return persistStore(store);
};
