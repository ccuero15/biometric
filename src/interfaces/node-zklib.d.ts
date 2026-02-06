declare module 'node-zklib' {
  class ZKLib {
    constructor(ip: string, port: number, timeout: number, inport: number);
    createSocket(): Promise<void>;
    getUsers(): Promise<{ data: any[] }>;
    getAttendance(): Promise<{ data: any[] }>;
    setUser(uid: number, userid: string, name: string, password?: string, role?: number, cardno?: string): Promise<any>;
    getRealTimeLogs(callback: (log: any) => void): Promise<void>;
    disconnect(): Promise<void>;
    getTime(): Promise<Date>;
    getFirmware(): Promise<string>;
    getPIN(): Promise<string>;
    getFaceOn(): Promise<number>;
    getSSR(): Promise<number>;
    getDeviceName(): Promise<string>;
    clearAttendanceLog(): Promise<void>;
    

  }
  export default ZKLib;
}