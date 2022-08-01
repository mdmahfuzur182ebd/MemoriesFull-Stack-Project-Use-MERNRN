import express from 'express'; 
//const express = require('express');
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

//https://www.mongodb.com/cloud/atlas

// const CONNECTION_URL = 'mongodb+srv://sajib:sajib1212@cluster0.uhh3s.mongodb.net/test';

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`)))
.catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false)


