"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartFactoryDAO = void 0;
var memoria_1 = require("./DAO/memoria");
var fs_1 = require("./DAO/fs");
var sql_1 = require("./DAO/sql");
var mongodb_1 = require("./DAO/mongodb");
var firebase_1 = require("./DAO/firebase");
var CartFactoryDAO = /** @class */ (function () {
    function CartFactoryDAO() {
    }
    CartFactoryDAO.get = function (tipo) {
        switch (tipo) {
            case 0:
                console.log('RETORNANDO CART INSTANCIA DE MEMORIA');
                return new memoria_1.CartDAOMEM();
            case 1:
                console.log('RETORNANDO CART INSTANCIA CLASE FS');
                return new fs_1.CartDAOFS();
            case 2:
                console.log('RETORNANDO INSTANCIA CLASE MYSQL');
                return new sql_1.CartDAOSQL(true);
            case 3:
                console.log('RETORNANDO INSTANCIA CLASE SQLITE');
                return new sql_1.CartDAOSQL(false);
            case 4:
                console.log('RETORNANDO INSTANCIA CLASE MONGO LOCAL');
                return new mongodb_1.CartDAOMONGO(true);
            case 5:
                console.log('RETORNANDO INSTANCIA CLASE MONGO ATLAS');
                return new mongodb_1.CartDAOMONGO(false);
            case 6:
                console.log('RETORNANDO INSTANCIA CLASE FIREBASE');
                return new firebase_1.CartDAOFirebase();
            default:
                console.log('RETORNANDO INSTANCIA CLASE MEMORIA');
                return new memoria_1.CartDAOMEM();
        }
    };
    return CartFactoryDAO;
}());
exports.CartFactoryDAO = CartFactoryDAO;
