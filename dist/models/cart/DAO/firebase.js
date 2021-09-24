"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartDAOFirebase = void 0;
var firebase_admin_1 = __importDefault(require("firebase-admin"));
var productsapi_1 = require("../../../apis/productsapi");
var CartDAOFirebase = /** @class */ (function () {
    function CartDAOFirebase() {
        this.db = firebase_admin_1.default.firestore();
        this.query = this.db.collection('carrito');
    }
    CartDAOFirebase.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var getSpecific, specific, product, getAll, docs, output;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.query.doc(id).get()];
                    case 1:
                        getSpecific = _a.sent();
                        specific = getSpecific.data();
                        product = [];
                        if (specific) {
                            product.push(__assign({ _id: getSpecific.id }, specific));
                            return [2 /*return*/, product];
                        }
                        return [2 /*return*/, product];
                    case 2: return [4 /*yield*/, this.query.get()];
                    case 3:
                        getAll = _a.sent();
                        docs = getAll.docs;
                        output = docs.map(function (doc) { return (__assign({ _id: doc.id }, doc.data())); });
                        return [2 /*return*/, output];
                }
            });
        });
    };
    CartDAOFirebase.prototype.add = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var getProduct, doc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productsapi_1.productsAPI.getProducts(id)];
                    case 1:
                        getProduct = _a.sent();
                        doc = this.query.doc(id);
                        return [4 /*yield*/, doc.create(getProduct[0])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, getProduct];
                }
            });
        });
    };
    CartDAOFirebase.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var getProduct, deletedProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(id)];
                    case 1:
                        getProduct = _a.sent();
                        deletedProduct = [];
                        if (!getProduct.length) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.query.doc(id).delete()];
                    case 2:
                        _a.sent();
                        deletedProduct.push.apply(deletedProduct, getProduct);
                        return [2 /*return*/, deletedProduct];
                    case 3: return [2 /*return*/, getProduct];
                }
            });
        });
    };
    return CartDAOFirebase;
}());
exports.CartDAOFirebase = CartDAOFirebase;
