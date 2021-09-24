"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("./config/config"));
exports.default = {
    servermysql: {
        client: 'mysql',
        connection: {
            host: "" + config_1.default.MYSQL_HOST,
            user: "" + config_1.default.MYSQL_USER,
            password: "" + config_1.default.MYSQL_PASSWORD,
            database: 'e-commerce',
        },
        migrations: { directory: __dirname + '/db/migrations' },
        seeds: { directory: __dirname + '/db/seeds' },
    },
    sqlite: {
        client: 'sqlite3',
        connection: { filename: './e-commerce' },
        useNullAsDefault: true,
        migrations: { directory: __dirname + '/db/migrations' },
        seeds: { directory: __dirname + '/db/seeds' },
    },
};
