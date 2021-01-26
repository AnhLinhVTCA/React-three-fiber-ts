import { RootState } from 'types';
import { HomeState } from './slice';

export const homeSelector = (state: RootState): HomeState => state.home;
