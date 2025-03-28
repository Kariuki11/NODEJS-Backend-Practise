import { Request, Response } from 'express';
import { YouVerifyService } from '../services/youverify.service';

export class VerificationController {
  static async verifyUserId(req: Request, res: Response) {
    try {
      const { userId } = req.body;
      
      if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
      }

      const verificationResult = await YouVerifyService.verifyUserId(userId);
      
      res.json({
        success: true,
        data: verificationResult,
        message: 'Verification completed'
      });
    } catch (error) {
      console.error('Verification error:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to verify user ID'
      });
    }
  }
}