import express from 'express';
import "dotenv/config"; 
import http from 'http';
import app from './index.js'
import { config } from 'dotenv';
import connectDB from './src/config/db.js';



const server = http.createServer(app);

const port = process.env.PORT || 5000;

server.listen(port, async () => {
    await connectDB();
    console.log(`Server running on port: ${port}`);
});
