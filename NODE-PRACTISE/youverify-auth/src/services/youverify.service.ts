import axios from 'axios';
require('dotenv').config();

const YOUVERIFY_API_KEY = process.env.YOUVERIFY_API_KEY;
const BASE_URL = 'https://api.sandbox.youverify.co/v2/api/identity/verify';
//const BASE_URL = 'https://api.sandbox.youverify.co';
//const BASE_URL = process.env.YOVERIFY_BASE_URL || "https://api.sandbox.youverify.co";


// Log the API key to check if it is loaded correctly
console.log("Loaded YouVerify API Key:", YOUVERIFY_API_KEY); 

export class YouVerifyService {
  static async verifyUserId(userId: string) {
    try {
      const response = await axios.get(`${BASE_URL}?id=${userId}`, {
        headers: {
          'Authorization': `Bearer ${YOUVERIFY_API_KEY}`,  // Use Bearer if required
          'Content-Type': 'application/json'
        }
      });
  
      console.log("YouVerify API Response:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("YouVerify API Error:", error.response?.data || error.message);
      throw error;
    }
  }
  
  // static async verifyUserId(userId: string) {
  //   try {
  //     console.log("Verifying User ID:", userId); // Log user ID before request

  //     const response = await axios.post(
  //       BASE_URL,
  //       { id: userId },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'token': YOUVERIFY_API_KEY
  //         }
  //       }
  //     );

  //     console.log("YouVerify API Response:", response.data); // Log API response
  //     return response.data;
  //   } catch (error: any) {
  //     console.error('YouVerify API Error:', error.response?.data || error.message);
  //     throw error;
  //   }
  // }
}

















// import axios from 'axios';
// require('dotenv').config();

// const YOUVERIFY_API_KEY = process.env.YOUVERIFY_API_KEY;
// const BASE_URL = 'https://api.sandbox.youverify.co/v2/api/identity/verify';

// //const BASE_URL = 'https://api.sandbox.youverify.co/v2/api/identity/verify';
// // const BASE_URL = 'https://api.sandbox.youverify.co';

// // const BASE_URL = 'https://api.youverify.co/v2/api/identity/ng/verify';


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