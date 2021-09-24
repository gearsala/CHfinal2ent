"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryDAO = void 0;
var memoria_1 = require("./DAO/memoria");
var fs_1 = require("./DAO/fs");
var sql_1 = require("./DAO/sql");
var mongodb_1 = require("./DAO/mongodb");
var firebase_1 = require("./DAO/firebase");
var FactoryDAO = /** @class */ (function () {
    function FactoryDAO() {
    }
    FactoryDAO.get = function (tipo) {
        switch (tipo) {
            case 0:
                console.log('RETORNANDO PRODUCTS INSTANCIA DE MEMORIA');
                return new memoria_1.ProductDAOMEM();
            case 1:
                console.log('RETORNANDO PRODUCTS INSTANCIA CLASE FS');
                return new fs_1.ProductDAOFS();
            case 2:
                console.log('RETORNANDO PRODUCTS INSTANCIA CLASE MYSQL');
                return new sql_1.ProductDAOSQL(true);
            case 3:
                console.log('RETORNANDO PRODUCTS INSTANCIA CLASE SQLITE');
                return new sql_1.ProductDAOSQL(false);
            case 4:
                console.log('RETORNANDO PRODUCTS INSTANCIA CLASE MONGO LOCAL');
                return new mongodb_1.ProductDAOMONGO(true);
            case 5:
                console.log('RETORNANDO PRODUCTS INSTANCIA CLASE MONGO ATLAS');
                return new mongodb_1.ProductDAOMONGO(false);
            case 6:
                console.log('RETORNANDO PRODUCTS INSTANCIA CLASE FIREBASE');
                return new firebase_1.ProductDAOFirebase();
            default:
                console.log('RETORNANDO PRODUCTS INSTANCIA CLASE MEMORIA');
                return new memoria_1.ProductDAOMEM();
        }
    };
    return FactoryDAO;
}());
exports.FactoryDAO = FactoryDAO;
