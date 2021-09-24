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
exports.ProductDAOFS = void 0;
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
var filePath = path_1.default.resolve(__dirname, '../../files/productslog.txt');
var ProductDAOFS = /** @class */ (function () {
    function ProductDAOFS() {
        this.content = [];
    }
    ProductDAOFS.prototype.randomId = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    ProductDAOFS.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var txtFile, _a, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, fs_1.promises.readFile(filePath, 'utf-8')];
                    case 1:
                        txtFile = _b.apply(_a, [_c.sent()]);
                        this.content = txtFile;
                        return [2 /*return*/, id
                                ? this.content.filter(function (product) { return product._id === id; })
                                : this.content];
                    case 2:
                        error_1 = _c.sent();
                        console.log(error_1);
                        return [2 /*return*/, this.content];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductDAOFS.prototype.add = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, newProduct;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        _c = (_b = JSON).parse;
                        return [4 /*yield*/, fs_1.promises.readFile(filePath, 'utf-8')];
                    case 1:
                        _a.content = _c.apply(_b, [_d.sent()]);
                        newProduct = __assign({ _id: this.randomId() }, data);
                        this.content.push(newProduct);
                        return [4 /*yield*/, fs_1.promises.writeFile(filePath, JSON.stringify(this.content, null, 2))];
                    case 2:
                        _d.sent();
                        return [2 /*return*/, newProduct];
                }
            });
        });
    };
    ProductDAOFS.prototype.update = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var getProducts, arrayPosition;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get()];
                    case 1:
                        getProducts = _a.sent();
                        arrayPosition = getProducts
                            .map(function (product) { return product._id; })
                            .indexOf(id);
                        arrayPosition !== -1 &&
                            (this.content[arrayPosition].title = data.title) + "\n\t\t\t\t" + (this.content[arrayPosition].description = data.description) + "\n\t\t\t\t" + (this.content[arrayPosition].code = data.code) + "\n\t\t\t\t" + (this.content[arrayPosition].price = data.price) + "\n\t\t\t\t" + (this.content[arrayPosition].thumbnail = data.thumbnail) + "\n\t\t\t\t" + (this.content[arrayPosition].stock = data.stock);
                        return [4 /*yield*/, fs_1.promises.writeFile(filePath, JSON.stringify(this.content, null, 2))];
                    case 2:
                        _a.sent();
                        // FIXME FIX THIS RETURN, WRAP THE UPDATED OBJECT INSIDE VARIABLE WITH A .PUSH
                        return [2 /*return*/, arrayPosition !== -1 ? [this.content[arrayPosition]] : []];
                }
            });
        });
    };
    ProductDAOFS.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var getProducts, arrayPosition, deletedProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get()];
                    case 1:
                        getProducts = _a.sent();
                        arrayPosition = getProducts
                            .map(function (product) { return product._id; })
                            .indexOf(id);
                        deletedProduct = this.content.filter(function (product) { return product._id == id; });
                        arrayPosition !== -1 && this.content.splice(arrayPosition, 1);
                        return [4 /*yield*/, fs_1.promises.writeFile(filePath, JSON.stringify(this.content, null, 2))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, arrayPosition !== -1 ? deletedProduct : []];
                }
            });
        });
    };
    ProductDAOFS.prototype.query = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var readFile, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get()];
                    case 1:
                        readFile = _a.sent();
                        query = [];
                        if (options.title)
                            query.push(function (product) { return product.title == options.title; });
                        if (options.price)
                            query.push(function (product) { return product.price == options.price; });
                        if (options.code)
                            query.push(function (product) { return product.code == options.code; });
                        if (options.priceMin)
                            query.push(function (product) { return product.price >= options.priceMin; });
                        if (options.priceMax)
                            query.push(function (product) { return product.price <= options.priceMax; });
                        if (options.stockMin)
                            query.push(function (product) { return product.stock >= options.stockMin; });
                        if (options.stockMax)
                            query.push(function (product) { return product.stock <= options.stockMax; });
                        return [2 /*return*/, readFile.filter(function (product) { return query.every(function (x) { return x(product); }); })];
                }
            });
        });
    };
    return ProductDAOFS;
}());
exports.ProductDAOFS = ProductDAOFS;