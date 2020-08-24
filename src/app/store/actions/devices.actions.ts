import { Action } from '@ngrx/store';
import { Device } from '../../model/device.model';

export const LOAD_DEVICES = '[Products] Load Devices';
export const LOAD_DEVICES_FAIL = '[Products] Load Devices Failed';
export const LOAD_DEVICES_SUCCESS = '[Products] Load Devices Success';

export class LoadDevices implements Action {
    readonly type  = LOAD_DEVICES;
}

export class LoadDevicesFail implements Action {
    readonly type  = LOAD_DEVICES_FAIL;
    constructor(public paylod: any) {}
}

export class LoadDevicesSuccess implements Action {
    readonly type  = LOAD_DEVICES_SUCCESS;
    constructor(public paylod: Device[]) {}
}


export type DeviceAction = LoadDevices | LoadDevicesFail | LoadDevicesSuccess;
