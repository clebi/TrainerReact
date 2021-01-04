import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, createStore, Store} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {trainingsReducer} from './TrainingsReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  trainings: trainingsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const storeInit = () => {
  return createStore(persistedReducer);
};

export const persistInit = (store: Store) => {
  return persistStore(store);
};
