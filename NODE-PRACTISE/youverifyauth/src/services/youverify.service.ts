import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const YOUVERIFY_API_KEY = process.env.YOUVERIFY_API_KEY;
const YOUVERIFY_BASE_URL = 'https://api.sandbox.youverify.co/v2/api/identity/verify';

interface YouVerifyResponse {
  success: boolean;
  data?: any;
  message?: string;
}

interface VerificationPayload {
  id: string;
  // Add other required fields according to YouVerify's API docs
  // Example: country?: string;
}

export const verifyUserId = async (userId: string): Promise<YouVerifyResponse> => {
  const payload: VerificationPayload = {
    id: userId
    // Add other payload fields if required
  };

  try {
    console.log(`Verifying User ID: ${userId}`);
    
    const response: AxiosResponse = await axios.post(
      YOUVERIFY_BASE_URL,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'token': YOUVERIFY_API_KEY,
          // Add any additional required headers
        }
      }
    );

    console.log('Verification successful:', response.data);
    
    return {
      success: true,
      data: response.data
    };
  } catch (error: any) {
    console.error('Verification error:', error.response?.data || error.message);
    
    if (error.response) {
      // Handle specific HTTP status codes
      switch (error.response.status) {
        case 400:
          throw new Error('Invalid request data');
        case 401:
          throw new Error('Invalid API credentials');
        case 404:
          throw new Error('Verification service unavailable');
        case 405:
          throw new Error('Method not allowed - verify if POST is the correct method');
        default:
          throw new Error(error.response.data?.message || 'Verification failed');
      }
    } else if (error.request) {
      throw new Error('No response received from verification service');
    } else {
      throw new Error(`Request setup error: ${error.message}`);
    }
  }
};



import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const YOUVERIFY_API_KEY = process.env.YOUVERIFY_API_KEY;
const YOUVERIFY_BASE_URL = 'https://api.sandbox.youverify.co/v2/api/identity/ng/verify';

interface YouVerifyResponse {
  success: boolean;
  data?: any;
  message?: string;
}

export const verifyUserId = async (userId: string): Promise<YouVerifyResponse> => {
  try {
    const response: AxiosResponse = await axios.get(`${YOUVERIFY_BASE_URL}/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        'token': YOUVERIFY_API_KEY
      }
    });
    
    return {
      success: true,
      data: response.data
    };
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Verification failed');
    } else {
      throw new Error('Network error while verifying ID');
    }
  }
};





















// import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

// const YOUVERIFY_API_KEY = process.env.YOUVERIFY_API_KEY;
// const YOUVERIFY_BASE_URL = 'https://api.sandbox.youverify.co/v2/api/identity/ng/verify';

// console.log("Loaded YouVerify API Key:", YOUVERIFY_API_KEY); 

// export const verifyUserId = async (userId: string) => {
//   try {
//     const response = await axios.get(`${YOUVERIFY_BASE_URL}/${userId}`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'token': YOUVERIFY_API_KEY
//       }
//     });
    
//     return response.data;
//   } catch (error: any) {
//     if (error.response) {
//       throw new Error(error.response.data.message || 'Verification failed');
//     } else {
//       throw new Error('Network error while verifying ID');
//     }
//   }
// };