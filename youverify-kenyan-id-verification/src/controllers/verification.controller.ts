import { Request, Response } from 'express';
import { YouVerifyService } from '../services/youverify.service';

const youVerifyService = new YouVerifyService();

export class VerificationController {
  static async verifyKenyanID(req: Request, res: Response) {
    try {
      const { idNumber, firstName, lastName, middleName, dateOfBirth, phoneNumber } = req.body;

      if (!idNumber) {
        return res.status(400).json({ error: 'ID number is required' });
      }

      const verificationResult = await youVerifyService.verifyKenyanID({
        idNumber,
        firstName,
        lastName,
        middleName,
        dateOfBirth,
        phoneNumber
      });

      res.json(verificationResult);
    } catch (error: any) {
      console.error('Verification error:', error);
      res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }
}