import express from 'express';
import { connectDatabase } from './config/database.js';
import userRoute from './routes/userroute.js';

const app = express();

app.use(express.json());
app.use('/api',userRoute);
app.listen(8000,() => {

    console.log('listening on 8000');
})