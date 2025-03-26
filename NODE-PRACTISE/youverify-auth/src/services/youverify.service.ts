import axios from 'axios';
require('dotenv').config();

const YOUVERIFY_API_KEY = process.env.YOUVERIFY_API_KEY;
const BASE_URL = 'https://api.youverify.co/v2/api/identity/ng/verify';

export class YouVerifyService {
  static async verifyUserId(userId: string) {
    try {
      const response = await axios.post(
        BASE_URL,
        { id: userId },
        {
          headers: {
            'Content-Type': 'application/json',
            'token': YOUVERIFY_API_KEY
          }
        }
      );
      return response.data;
    } catch (error: any) {
      console.error('YouVerify API Error:', error.response?.data || error.message);
      throw error;
    }
  }
}