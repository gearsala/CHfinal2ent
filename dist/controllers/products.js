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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
require("regenerator-runtime/runtime");
var productsapi_1 = require("../apis/productsapi");
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    ProductController.prototype.getProducts = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, title, price, code, stock, priceMax, priceMin, stockMax, stockMin, singleProduct, query, titleLow, titleFinal, productQuery, get, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, , 8]);
                        id = req.params.id;
                        _a = req.query, title = _a.title, price = _a.price, code = _a.code, stock = _a.stock, priceMax = _a.priceMax, priceMin = _a.priceMin, stockMax = _a.stockMax, stockMin = _a.stockMin;
                        if (!id) return [3 /*break*/, 2];
                        return [4 /*yield*/, productsapi_1.productsAPI.getProducts(id)];
                    case 1:
                        singleProduct = _b.sent();
                        if (singleProduct.length === 0) {
                            return [2 /*return*/, res
                                    .status(404)
                                    .json({ error: 'No existe un producto con este id' })];
                        }
                        return [2 /*return*/, res.json({ product: singleProduct })];
                    case 2:
                        query = {};
                        if (title) {
                            titleLow = title.toString().toLowerCase();
                            titleFinal = titleLow.charAt(0).toUpperCase() + titleLow.slice(1);
                            query.title = titleFinal;
                        }
                        if (code)
                            query.code = code.toString();
                        if (priceMax)
                            query.priceMax = Number(priceMax);
                        if (priceMin)
                            query.priceMin = Number(priceMin);
                        if (stockMax)
                            query.stockMax = Number(stockMax);
                        if (stockMin)
                            query.stockMin = Number(stockMin);
                        if (!Object.keys(query).length) return [3 /*break*/, 4];
                        return [4 /*yield*/, productsapi_1.productsAPI.query(query)];
                    case 3:
                        productQuery = _b.sent();
                        if (productQuery.length)
                            return [2 /*return*/, res.json({
                                    products: productQuery,
                                })];
                        return [2 /*return*/, res.status(404).json({ error: 'No hay productos que hagan match con la busqueda' })];
                    case 4: return [4 /*yield*/, productsapi_1.productsAPI.getProducts()];
                    case 5:
                        get = _b.sent();
                        if (get.length === 0) {
                            return [2 /*return*/, res.status(404).json({ error: 'No hay productos cargados' })];
                        }
                        return [2 /*return*/, res.json({ products: get })];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_1 = _b.sent();
                        if (error_1 instanceof Error) {
                            res.status(500).json({ error: error_1.message });
                        }
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.prototype.addProducts = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var body, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        body = req.body;
                        if (!body) return [3 /*break*/, 2];
                        return [4 /*yield*/, productsapi_1.productsAPI.addProduct(body)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.json({ body: body })];
                    case 2: return [2 /*return*/, res.status(404).json({
                            error: 'Se debe enviar un body con title, description, code, price, thumbnail, stock',
                        })];
                    case 3:
                        error_2 = _a.sent();
                        if (error_2 instanceof Error) {
                            res.status(500).json({ error: error_2.message });
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.prototype.updateProducts = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, body, updatedProduct, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        body = req.body;
                        return [4 /*yield*/, productsapi_1.productsAPI.updateProduct(id, body)];
                    case 1:
                        updatedProduct = _a.sent();
                        updatedProduct.length === 0
                            ? res.status(404).json({ error: 'Producto no encontrado' })
                            : res.status(201).json({ product: updatedProduct });
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        if (error_3 instanceof Error) {
                            res.status(500).json({ error: error_3.message });
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.prototype.deleteProducts = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, deletedProduct, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, productsapi_1.productsAPI.deleteProduct(id)];
                    case 1:
                        deletedProduct = _a.sent();
                        deletedProduct.length === 0
                            ? res
                                .status(404)
                                .json({ error: 'Producto no encontrado o ya eliminado' })
                            : res.json({ deletedProduct: deletedProduct });
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        if (error_4 instanceof Error) {
                            res.status(500).json({ error: error_4.message });
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ProductController;
}());
exports.productController = new ProductController();
