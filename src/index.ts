import app from './server';
import dotenv from 'dotenv';

dotenv.config();


app.listen(4000, () => { // traer prisma
  console.log('Server started on port 4000');
});



// controllers - helpers - interfaces - middlewares -
// models - routes - serivces - validations
