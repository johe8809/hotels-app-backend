import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from "body-parser";
import * as cors from "cors";

import router from './router/v1';
import config from './main';
import { Server } from 'tls';

const app = express();

mongoose.connect(config.db);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

router(app);

let server;

server = app.listen(3000, () => {
    console.log(`Server connected on port ${config.port}`);
});

export default Server