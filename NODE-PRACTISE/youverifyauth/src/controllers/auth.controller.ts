import { Request, Response } from 'express';
import { verifyUserId } from '../services/youverify.service';

export const verifyUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    
    if (!userId) {
      res.status(400).json({ success: false, message: 'User ID is required' });
      return;
    }

    const verificationResult = await verifyUserId(userId);
    res.status(200).json({
      success: true,
      data: verificationResult
    });
  } catch (error: any) {
    console.error('Verification error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Internal server error'
    });
  }
};