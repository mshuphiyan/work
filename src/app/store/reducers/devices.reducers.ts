import * as fromDevices from '../actions/devices.actions';
import { Device } from '../../model/device.model';

export interface DeviceState {
    data: Device[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: DeviceState = {
    data: [],
    loaded: false,
    loading: false,
};

export function reducer(
    state = initialState,
    action: fromDevices.DeviceAction
): DeviceState {
    switch (action.type) {
        case fromDevices.LOAD_DEVICES: {
            return {
                ...state,
                loading: true
            };
        }
        case fromDevices.LOAD_DEVICES_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true
            };
        }

        case fromDevices.LOAD_DEVICES_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}

