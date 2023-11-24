import { connect } from 'mongoose';

export async function connectToDB() {
  try {
     await connect(process.env.MONGODB_URI);
    console.log('\x1b[32m%s\x1b[0m', '----- Connected to MongoDB -----');
  } catch (error) {
    console.error(error);
  }
}

