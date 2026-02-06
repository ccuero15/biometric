export interface IBiometricProvider {
  connect(ip: string, port: number): Promise<boolean>;
  disconnect(): Promise<void>;
  captureFingerprint(): Promise<string>; // Retorna el template crudo
  verifyUser(template: string, userId: number): Promise<boolean>;
}