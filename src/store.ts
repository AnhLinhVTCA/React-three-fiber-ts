import { combineReducers, configureStore } from '@reduxjs/toolkit';

import homeReducer from 'pages/Home/slice';
import headerContainerReducer from 'containers/Header/slice';

const containersReducer = combineReducers({
  header: headerContainerReducer,
});

const reducers = {
  containers: containersReducer,
  home: homeReducer,
};

export const store = configureStore({
  reducer: combineReducers(reducers),
});
