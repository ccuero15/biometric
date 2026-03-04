export enum DeviceStatus {
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected',
  ERROR = 'error',
  CONNECTING = 'connecting'
}

export enum AttendanceStatus {
  CHECK_IN = 0,
  CHECK_OUT = 1,
  BREAK_OUT = 2,
  BREAK_IN = 3,
  OVERTIME_IN = 4,
  OVERTIME_OUT = 5
}

export enum PrivilegeLevel {
  USER = 0,
  ADMIN = 1
}

export interface DeviceInfo {
  firmware: string;
  serial: string;
  platform: string;
  deviceName: string;
  usersCount: number;
  recordsCount: number;
}

export interface ZKUser {
  uid: number;
  name: string;
  privilege: PrivilegeLevel;
  userId: string;
  groupId: string;
  password?: string;
  card?: number;
}

export interface AttendanceLog {
  userId: string;
  timestamp: string; // ISO 8601
  status: number;
  punch: number;
  deviceId: string;
}

export interface AttendanceEvent extends AttendanceLog {
  event: 'attendance';
}

export interface DeviceErrorEvent {
  event: 'error';
  deviceId: string;
  error: string;
  timestamp: string;
}

export interface EnrollStatusEvent {
  event: 'enroll_status';
  deviceId: string;
  status: string;
  message: string;
  uid: number;
  attempt?: number;
}

export type BridgeEvent = AttendanceEvent | DeviceErrorEvent | EnrollStatusEvent;

// Request/Response del Bridge
export interface BridgeRequest {
  requestId: string;
  action: BridgeAction;
  deviceId?: string;
  payload?: Record<string, unknown>;
}

export type BridgeAction =
  | 'connect_device'
  | 'disconnect_device'
  | 'start_live_capture'
  | 'stop_live_capture'
  | 'get_users'
  | 'set_user'
  | 'delete_user'
  | 'get_attendance'
  | 'clear_attendance'
  | 'get_device_info'
  | 'test_voice'
  | 'restart_device'
  | 'enroll_user'
  | 'START_ENROLL';

export interface BridgeResponse {
  requestId?: string;
  status: 'success' | 'error' | 'connected' | 'disconnected' | 'already_connected' | 'enrollment_success';
  deviceId?: string;
  data?: unknown;
  error?: string;
  message?: string;
  info?: DeviceInfo;
  template?: string; // Hash/Template de la huella en Hex
  code?: string;     // Código de error específico
}