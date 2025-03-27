import { Request, Response } from 'express';
import { verifyUserId } from '../services/youverify.service';

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    
    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID is required' });
    }

    const verificationResult = await verifyUserId(userId);
    res.status(200).json({
      success: true,
      data: verificationResult
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      //message: error.message || 'Internal server error'
      message: error.response?.data?.message || error.message || 'Failed to verify user ID'
    });
  }
};