"use strict";
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
exports.CartDAOFS = void 0;
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
var filePath = path_1.default.resolve(__dirname, '../../files/productslog.txt');
var filePathCart = path_1.default.resolve(__dirname, '../../files/cartlog.txt');
var CartDAOFS = /** @class */ (function () {
    function CartDAOFS() {
        this.content = [
            {
                id: this.randomId(),
                timestamp: Date.now(),
                products: [],
            },
        ];
    }
    CartDAOFS.prototype.randomId = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    CartDAOFS.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var txtFile, _a, _b, result;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, fs_1.promises.readFile(filePathCart, 'utf-8')];
                    case 1:
                        txtFile = _b.apply(_a, [_c.sent()]);
                        this.content = txtFile.length === 0 ? this.content : txtFile;
                        result = id
                            ? this.content[0].products.filter(function (product) { return product._id === id; })
                            : this.content;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CartDAOFS.prototype.add = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var txtFileC, _a, _b, txtFile, _c, _d, newProduct;
            var _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, fs_1.promises.readFile(filePathCart, 'utf-8')];
                    case 1:
                        txtFileC = _b.apply(_a, [_f.sent()]);
                        this.content = txtFileC.length === 0 ? this.content : txtFileC;
                        _d = (_c = JSON).parse;
                        return [4 /*yield*/, fs_1.promises.readFile(filePath, 'utf-8')];
                    case 2:
                        txtFile = _d.apply(_c, [_f.sent()]);
                        newProduct = txtFile.filter(function (product) { return product._id === id; });
                        (_e = this.content[0].products).push.apply(_e, newProduct);
                        return [4 /*yield*/, fs_1.promises.writeFile(filePathCart, JSON.stringify(this.content, null, 2))];
                    case 3:
                        _f.sent();
                        return [2 /*return*/, newProduct.length === 0 ? [] : newProduct];
                }
            });
        });
    };
    CartDAOFS.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, arrayPosition, deletedProduct;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        _c = (_b = JSON).parse;
                        return [4 /*yield*/, fs_1.promises.readFile(filePathCart, 'utf-8')];
                    case 1:
                        _a.content = _c.apply(_b, [_d.sent()]);
                        arrayPosition = this.content[0].products
                            .map(function (product) { return product._id; })
                            .indexOf(id);
                        deletedProduct = this.content[0].products.filter(function (product) { return product._id == id; });
                        arrayPosition !== -1 && this.content[0].products.splice(arrayPosition, 1);
                        return [4 /*yield*/, fs_1.promises.writeFile(filePathCart, JSON.stringify(this.content, null, 2))];
                    case 2:
                        _d.sent();
                        return [2 /*return*/, arrayPosition === -1 ? [] : deletedProduct];
                }
            });
        });
    };
    return CartDAOFS;
}());
exports.CartDAOFS = CartDAOFS;
