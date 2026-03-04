import { deviceManager } from './src/services/DeviceManagerService.ts';

async function test() {
    try {
        console.log('INITIALIZING DEVICE MANAGER...');
        await deviceManager.initialize();
        console.log('REGISTERING DEVICE...');
        const result = await deviceManager.registerDevice({
            deviceId: "1",
            ip: "192.168.16.161",
            port: 4370
        });
        console.log('RESULT:', JSON.stringify(result, null, 2));
        process.exit(0);
    } catch (e) {
        console.error('ERROR:', e);
        process.exit(1);
    }
}

test();
