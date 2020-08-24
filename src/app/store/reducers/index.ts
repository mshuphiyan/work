import { ActionReducerMap } from '@ngrx/store';
import * as fromDevices from './devices.reducers';

export interface DevicesState {
    devices: fromDevices.DeviceState;
}

export const reducers: ActionReducerMap<DevicesState> = {
    devices: fromDevices.reducer,
};
