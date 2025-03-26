import { Request, Response } from 'express';
import { YouVerifyService } from '../services/youverify.service';

export class VerificationController {
  static async verifyUserId(req: Request, res: Response) {
    try {
      const { userId } = req.body;

      if (!userId) {
        return res.status(400).json({
          success: false,
          error: 'User ID is required',
          example: { "userId": "12345678901" }
        });
      }

      console.log(`[Controller] Starting verification for: ${userId}`);
      
      const result = await YouVerifyService.verifyUserId(userId);

      if (!result.success) {
        return res.status(400).json({
          success: false,
          error: result.message,
          details: result.data
        });
      }

      return res.json({
        success: true,
        data: result.data,
        message: 'ID verification successful'
      });

    } catch (error: any) {
      console.error('[Controller] Unexpected error:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error',
        details: error.message
      });
    }
  }
}







// import { Request, Response } from 'express';
// import { YouVerifyService } from '../services/youverify.service';

// export class VerificationController {
//   static async verifyUserId(req: Request, res: Response) {
//     try {
//       const { userId } = req.body;
      
//       if (!userId) {
//         return res.status(400).json({ error: 'User ID is required' });
//       }

//       const verificationResult = await YouVerifyService.verifyUserId(userId);
      
//       res.json({
//         success: true,
//         data: verificationResult,
//         message: 'Verification completed'
//       });
//     } catch (error) {
//       console.error('Verification error:', error);
//       res.status(500).json({
//         success: false,
//         error: 'Failed to verify user ID'
//       });
//     }
//   }
// }