"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var env = {
    MYSQL_HOST: process.env.MYSQL_HOST || 'urlhost',
    MYSQL_USER: process.env.MYSQL_USER || 'user',
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || 'password',
    MONGO_USER: process.env.MONGO_USER || 'user',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'password',
    MONGO_ATLAS_CLUSTER: process.env.MONGO_ATLAS_CLUSTER || 'clusterUrl',
    MONGO_DBNAME: process.env.MONGO_DBNAME || 'dbName',
    FIREBASE_PRIVATEKEY: process.env.FIREBASE_PRIVATEKEY || 'privatekey',
    FIREBASE_CLIENTEMAIL: process.env.FIREBASE_CLIENTEMAIL || 'clientemail',
    FIREBASE_PROJECTID: process.env.FIREBASE_PROJECTID || 'projectid',
    FIREBASE_DBURL: process.env.FIREBASE_DBURL || 'dbUrl',
};
exports.default = env;
