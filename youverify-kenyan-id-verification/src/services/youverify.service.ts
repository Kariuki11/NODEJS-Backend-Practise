import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

interface KenyanIDVerificationPayload {
  idNumber: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  dateOfBirth?: string;
  phoneNumber?: string;
}

export class YouVerifyService {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor() {
    this.apiKey = process.env.YOUVERIFY_API_KEY || '';
    this.baseUrl = process.env.YOUVERIFY_BASE_URL || '';
    
    if (!this.apiKey || !this.baseUrl) {
      throw new Error('YouVerify API credentials not configured');
    }
  }

  async verifyKenyanID(payload: KenyanIDVerificationPayload) {
    try {
      const url = `${this.baseUrl}/v2/api/identity/ke/id-scrub`;
      
      const headers = {
        'Content-Type': 'application/json',
        'token': this.apiKey
      };

      const requestBody = {
        id: payload.idNumber,
        firstName: payload.firstName,
        lastName: payload.lastName,
        middleName: payload.middleName,
        dob: payload.dateOfBirth,
        phoneNumber: payload.phoneNumber,
        isSubjectConsent: true
      };

      const response = await axios.post(url, requestBody, { headers });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('YouVerify API error:', error.response?.data);
        throw new Error(error.response?.data?.message || 'Verification failed');
      }
      throw new Error('An unexpected error occurred');
    }
  }
}