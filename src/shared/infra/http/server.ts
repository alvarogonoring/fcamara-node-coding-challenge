import 'reflect-metadata';
import express from 'express';
import '../typeorm';

const app = express();

const port = 8080;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})