import mongoose from "mongoose";

export default async (connectionString) => {
    try {
        await mongoose.connect(connectionString);
        console.log('Successfully connected to MongoDB database');
    } catch (error) {
        console.error('Failed to connect to MongoDB database:', error);
        process.exit(1);
    }
}
