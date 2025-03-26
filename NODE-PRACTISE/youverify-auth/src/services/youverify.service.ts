import axios, { AxiosError } from 'axios';
import https from 'https';
import dotenv from 'dotenv';

dotenv.config();

interface YouVerifyResponse {
  success: boolean;
  data?: any;
  message?: string;
}

const YOUVERIFY_API_KEY = process.env.YOUVERIFY_API_KEY;
const BASE_URL = 'https://api.youverify.co/v2/api/identity/ng/verify';

export class YouVerifyService {
  static async verifyUserId(userId: string): Promise<YouVerifyResponse> {
    try {
      if (!YOUVERIFY_API_KEY) {
        throw new Error('YouVerify API key is missing from environment variables');
      }

      if (!userId || userId.length < 11) {
        throw new Error('Invalid user ID format. Nigerian IDs typically have 11 digits');
      }

      console.log(`[YouVerify] Attempting to verify ID: ${userId}`);

      const response = await axios.post(
        BASE_URL,
        {
          id: userId,
          metadata: {
            source: 'nodejs-sdk'
          }
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'token': YOUVERIFY_API_KEY,
            'X-Client-Type': 'NodeJS/1.0'
          },
          httpsAgent: new https.Agent({ keepAlive: true }),
          timeout: 10000
        }
      );

      console.log('[YouVerify] Verification successful:', response.data);
      return {
        success: true,
        data: response.data,
        message: 'Verification successful'
      };

    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      
      console.error('[YouVerify] Verification failed:', {
        status: axiosError.response?.status,
        statusText: axiosError.response?.statusText,
        data: axiosError.response?.data,
        config: {
          url: axiosError.config?.url,
          method: axiosError.config?.method
        }
      });

      return {
        success: false,
        message: axiosError.response?.data?.message || axiosError.message || 'Verification failed',
        data: axiosError.response?.data
      };
    }
  }
}









// import axios from 'axios';
// require('dotenv').config();

// const YOUVERIFY_API_KEY = process.env.YOUVERIFY_API_KEY;
// const BASE_URL = 'https://api.youverify.co/v2/api/identity/ng/verify';

// export class YouVerifyService {
//   static async verifyUserId(userId: string) {
//     try {
//       const response = await axios.post(
//         BASE_URL,
//         { id: userId },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'token': YOUVERIFY_API_KEY
//           }
//         }
//       );
//       return response.data;
//     } catch (error: any) {
//       console.error('YouVerify API Error:', error.response?.data || error.message);
//       throw error;
//     }
//   }
// }