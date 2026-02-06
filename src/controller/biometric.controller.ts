import { Request, Response } from 'express';
import { BiometricService } from '@/services/not-used-biometric.services.ts';


export class BiometricController {
  constructor(private readonly biometricService: BiometricService) {}

  public register = async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId, deviceIp, devicePort } = req.body;
      const result = await this.biometricService.enrollUser(userId, deviceIp, devicePort);
      
      res.status(201).json({ success: true, data: result });
    } catch (error) {
      res.status(500).json({ success: false, message: (error as Error).message });
    }
  };
}