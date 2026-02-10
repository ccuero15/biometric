// types/node-zklib.d.ts

declare module 'zklib-js' {
  export interface ZKUserData {
    uid: number;
    userid: string;
    name: string;
    password?: string;
    role: number;
    cardno: string;
  }

  export interface ZKAttendanceData {
    userSn: number;
    deviceUserId: string;
    recordTime: string;
    ip: string;
  }

  export interface ZKTemplateData {
    uid: number;
    fingerIndex: number;
    template: Buffer;
  }

  export interface IZKUser {
    uid: number;
    userid: string;
    name: string;
    password?: string;
    role: number;
    cardno: string;
  }

  export interface IZKLog {
    userSn: number;
    deviceUserId: string;
    recordTime: Date;
    ip: string;
  }

  export interface IZKUser {
    uid: number;
    userid: string;
    name: string;
    password?: string;
    role: number;
    cardno: string;
  }

  export interface IZKAttendance {
    userSn: number;
    deviceUserId: string;
    recordTime: string; // O Date, dependiendo de la versión exacta
    ip: string;
  }

  export interface IZKRealTimeLog {
    userId: string;
    attTime: string;
    type: number;
  }


  class ZKLib {
    constructor(ip: string, port: number, timeout: number, inport: number);

    // Connectivity
    createSocket(): Promise<void>;
    disconnect(): Promise<void>;
    freeData(): Promise<void>;

    // Users
    getUsers(): Promise<{ data: ZKUserData[] }>;
    setUser(uid: number | string, userid: string, name: string, password?: string, role?: number, cardno?: number | string): Promise<any>;
    deleteUser(uid: number): Promise<any>; // Although not in main class, it can be called if we add it or use executeCmd

    // Attendance
    getAttendances(cb?: (percent: number, total: number) => void): Promise<{ data: ZKAttendanceData[] }>;
    getAttendanceSize(): Promise<number>;
    getRealTimeLogs(callback: (log: any) => void): Promise<void>;
    clearAttendanceLog(): Promise<void>;

    // Device Info
    getInfo(): Promise<{ userCounts: number, logCounts: number, logCapacity: number }>;
    getTime(): Promise<Date>;
    getSerialNumber(): Promise<string>;
    getDeviceName(): Promise<string>;
    getFirmware(): Promise<string>;
    getPlatform(): Promise<string>;
    getOS(): Promise<string>;
    getPIN(): Promise<string>;

    // System
    reboot(): Promise<void>;
    disableDevice(): Promise<void>;
    enableDevice(): Promise<void>;
    executeCmd(command: number, data?: string | Buffer): Promise<any>;
  }

  export default ZKLib;
}