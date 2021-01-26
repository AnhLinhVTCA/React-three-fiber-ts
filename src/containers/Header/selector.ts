import { RootState } from 'types';
import { HeaderState } from './slice';

export const headerSelector = (state: RootState): HeaderState => state.containers.header;
