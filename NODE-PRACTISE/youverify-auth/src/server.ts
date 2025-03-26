import { app } from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



// import app from './app';
// require('dotenv').config();

// const PORT = process.env.PORT || 7000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });