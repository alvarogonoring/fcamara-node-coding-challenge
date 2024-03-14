import 'reflect-metadata';
import express from 'express';
import '../typeorm';
import {router} from "@/shared/infra/http/routes";

const app = express();

const port = 8080;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})