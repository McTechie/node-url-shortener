import dotenv from 'dotenv';
import express from 'express';
import urlRouter from './routes/url.mjs';
import { connectToDB } from './db.mjs';

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

// DB Connection
connectToDB();

// Middleware
app.use(express.json());

// Routes
app.use('/url', urlRouter);

// Server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
