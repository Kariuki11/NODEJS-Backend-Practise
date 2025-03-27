import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const YOUVERIFY_API_KEY = process.env.YOUVERIFY_API_KEY;
const YOUVERIFY_BASE_URL = 'https://api.sandbox.youverify.co/v2/api/identity/ng/verify';

console.log("Loaded YouVerify API Key:", YOUVERIFY_API_KEY); 

export const verifyUserId = async (userId: string) => {
  try {
    const response = await axios.get(`${YOUVERIFY_BASE_URL}/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        'token': YOUVERIFY_API_KEY
      }
    });
    
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Verification failed');
    } else {
      throw new Error('Network error while verifying ID');
    }
  }
};