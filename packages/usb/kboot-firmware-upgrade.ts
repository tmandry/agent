import * as path from 'path';
import { LogService } from 'uhk-common';
import { UhkHidDevice, UhkOperations } from 'uhk-usb';

const logService = new LogService();
const rootDir = path.join(__dirname, '../../tmp');
const uhkHidDevice = new UhkHidDevice(logService, {}, rootDir);
const uhkOperations = new UhkOperations(logService, uhkHidDevice, rootDir);

uhkOperations
    .updateRightFirmware()
    .then(() => uhkOperations.updateLeftModule())
    .then(() => console.log('Firmware upgrade finished'))
    .catch(error => {
        console.error(error);
        process.exit(-1);
    });
