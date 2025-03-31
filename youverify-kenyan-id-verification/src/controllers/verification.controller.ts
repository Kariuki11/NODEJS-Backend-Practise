import { Request, Response } from 'express';
import { YouVerifyService } from '../services/youverify.service';

const youVerifyService = new YouVerifyService();

export const verifyKenyanID = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id, idType, isSubjectConsent } = req.body;

        if (!id) {
            res.status(400).json({ error: 'ID number is required' });
            return;
        }

        const verificationResult = await youVerifyService.verifyKenyanID({
            idNumber: id,
            idType,
            // firstName,
            // lastName,
            // middleName,
            // dateOfBirth,
            // phoneNumber
        });

        console.log('Verification result:', verificationResult);

        res.json(verificationResult);
    } catch (error: any) {
        console.error('Verification error:', error);
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
};