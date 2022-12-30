import mongoose from 'mongoose'

export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@ECOMMERCE-MERN.dqxr8hk.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL)
        console.log('database connected successfully');
    } catch (error) {
        console.log('error while connecting with the database ', error.message);
    }
}

export default Connection;