import cluster from "cluster";
import os from 'os'
import mongoose from "mongoose";
import config from 'config'
import { runServer } from "./src/api/server";

const debug = require('debug')('app:main')

const init = (): void => {
    mongoose.connect(config.get('db_connection_string.address'))
    .then(() => debug('connection mongo is up'))
    .then(() => runServer())
    .catch(() => debug('something is wrong, connection to mongo is faild'))
}

const runCluster = (): void => {
    if (cluster.isPrimary)
        for (let i = 0; i < os.cpus().length - 1; i++)
            cluster.fork()
    else init()
}

runCluster()